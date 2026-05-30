const fs = require('fs');
const path = require('path');

function generateMermaidGraph(directory, outputFile) {
    const nodes = [];
    const edges = [];
    const nodeMap = new Map();

    function scanDir(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                scanDir(fullPath);
            } else if (item.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                const titleMatch = content.match(/^#\s+(.+?)\s+·/m);
                const typeMatch = content.match(/\*\*十元类型\*\*:\s*(.+)/);
                
                if (titleMatch && typeMatch) {
                    const title = titleMatch[1].trim();
                    const type = typeMatch[1].trim();
                    const nodeId = item.replace('.md', '');
                    
                    nodes.push({
                        id: nodeId,
                        title: title,
                        type: type
                    });
                    
                    nodeMap.set(title, nodeId);
                }
            }
        });
    }

    function extractLinks(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                extractLinks(fullPath);
            } else if (item.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                const linkRegex = /\[\[([^\]]+)\]\]/g;
                let match;
                
                while ((match = linkRegex.exec(content)) !== null) {
                    const linkName = match[1].split('|')[0].trim();
                    const fromId = item.replace('.md', '');
                    const toId = linkName.replace(/\s/g, '_');
                    
                    if (nodeMap.has(linkName)) {
                        edges.push({
                            from: fromId,
                            to: nodeMap.get(linkName)
                        });
                    }
                }
            }
        });
    }

    console.log('正在扫描文件...');
    scanDir(directory);
    
    console.log('正在提取链接...');
    extractLinks(directory);

    let mermaidCode = 'graph TD\n';
    
    nodes.forEach(node => {
        const typeClass = node.type.includes('命运型') ? 'xz' :
                         node.type.includes('因果型') ? 'zx' :
                         node.type.includes('时间型') ? 'xn' :
                         node.type.includes('本体型') ? 'zn' : 'nx';
        mermaidCode += `    ${node.id}["${node.title}"]:::${typeClass}\n`;
    });
    
    edges.forEach(edge => {
        mermaidCode += `    ${edge.from} --> ${edge.to}\n`;
    });

    mermaidCode += '\n    classDef xz fill:#ff9999,stroke:#ff0000;\n';
    mermaidCode += '    classDef zx fill:#9999ff,stroke:#0000ff;\n';
    mermaidCode += '    classDef xn fill:#99ffff,stroke:#00ffff;\n';
    mermaidCode += '    classDef zn fill:#99ff99,stroke:#00ff00;\n';
    mermaidCode += '    classDef nx fill:#ffff99,stroke:#ffff00;\n';

    fs.writeFileSync(outputFile, mermaidCode, 'utf-8');
    console.log(`\nMermaid图谱已生成: ${outputFile}`);
    console.log(`节点数: ${nodes.length}`);
    console.log(`边数: ${edges.length}`);

    return { nodes, edges };
}

const targetDir = process.argv[2] || path.join(__dirname, '../../05-银矿库/角色库');
const outputFile = process.argv[3] || path.join(__dirname, '../output/role_graph.md');
generateMermaidGraph(targetDir, outputFile);
