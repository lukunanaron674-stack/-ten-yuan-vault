const fs = require('fs');
const path = require('path');

class ReportGenerator {
    constructor(baseDir) {
        this.baseDir = baseDir;
        this.outputDir = path.join(baseDir, 'reports');
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
        }
    }

    generateCruiseReport(data) {
        const date = new Date().toISOString().split('T')[0];
        const filename = `cruise_report_${date}.md`;
        const filepath = path.join(this.outputDir, filename);

        let content = `# 巡航报告 - ${date}\n\n`;
        content += `## 巡航概览\n\n`;
        content += `- 巡航ID: ${data.cruiseId || 'N/A'}\n`;
        content += `- 开始时间: ${data.startTime || 'N/A'}\n`;
        content += `- 结束时间: ${data.endTime || 'N/A'}\n`;
        content += `- 状态: ${data.status || 'unknown'}\n\n`;

        content += `## 任务执行情况\n\n`;
        content += `| 任务名称 | 状态 | 详情 |\n`;
        content += `|---------|------|------|\n`;
        
        (data.tasks || []).forEach(task => {
            const status = task.status === 'success' ? '✅ 成功' : '❌ 失败';
            content += `| ${task.name} | ${status} | ${task.message || '-'} |\n`;
        });

        content += `\n## 统计信息\n\n`;
        content += `- 总任务数: ${data.tasks?.length || 0}\n`;
        content += `- 成功任务: ${data.tasks?.filter(t => t.status === 'success').length || 0}\n`;
        content += `- 失败任务: ${data.tasks?.filter(t => t.status === 'failed').length || 0}\n\n`;

        content += `## 错误记录\n\n`;
        if (data.errors && data.errors.length > 0) {
            data.errors.forEach(err => {
                content += `- **${err.task}**: ${err.message}\n`;
            });
        } else {
            content += `- 无错误\n`;
        }

        content += `\n---\n`;
        content += `**生成时间**: ${new Date().toISOString()}\n`;

        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`巡航报告已生成: ${filepath}`);
        return filepath;
    }

    generateSummaryReport(stats) {
        const date = new Date().toISOString().split('T')[0];
        const filename = `summary_report_${date}.md`;
        const filepath = path.join(this.outputDir, filename);

        let content = `# 总结报告 - ${date}\n\n`;
        content += `## 数据统计\n\n`;
        content += `| 指标 | 数值 |\n`;
        content += `|-----|------|\n`;
        
        Object.entries(stats).forEach(([key, value]) => {
            content += `| ${key} | ${value} |\n`;
        });

        content += `\n## 五元类型分布\n\n`;
        if (stats.wuyuanDistribution) {
            Object.entries(stats.wuyuanDistribution).forEach(([type, count]) => {
                const percentage = ((count / stats.total) * 100).toFixed(1);
                content += `- ${type}: ${count} (${percentage}%)\n`;
            });
        }

        content += `\n---\n`;
        content += `**生成时间**: ${new Date().toISOString()}\n`;

        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`总结报告已生成: ${filepath}`);
        return filepath;
    }

    generateArchiveReport(archiveData) {
        const quarter = Math.ceil((new Date().getMonth() + 1) / 3);
        const year = new Date().getFullYear();
        const filename = `archive_report_Q${quarter}_${year}.md`;
        const filepath = path.join(this.outputDir, filename);

        let content = `# 归档报告 - Q${quarter} ${year}\n\n`;
        content += `## 归档概览\n\n`;
        content += `- 归档周期: ${archiveData.startDate} 至 ${archiveData.endDate}\n`;
        content += `- 归档文件数: ${archiveData.totalFiles}\n`;
        content += `- 归档大小: ${archiveData.totalSize}\n\n`;

        content += `## 新增内容统计\n\n`;
        if (archiveData.breakdown) {
            Object.entries(archiveData.breakdown).forEach(([category, count]) => {
                content += `- ${category}: ${count}\n`;
            });
        }

        content += `\n## 质量检查\n\n`;
        content += `- 文档完整率: ${archiveData.completeness || 0}%\n`;
        content += `- 链接有效率: ${archiveData.linkHealth || 0}%\n`;
        content += `- 五元标注规范率: ${archiveData.wuyuanCompliance || 0}%\n\n`;

        content += `## 下季度计划\n\n`;
        if (archiveData.nextQuarterPlans) {
            archiveData.nextQuarterPlans.forEach(plan => {
                content += `- ${plan}\n`;
            });
        }

        content += `\n---\n`;
        content += `**生成时间**: ${new Date().toISOString()}\n`;

        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`归档报告已生成: ${filepath}`);
        return filepath;
    }
}

module.exports = ReportGenerator;
