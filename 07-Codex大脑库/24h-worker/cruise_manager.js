const fs = require('fs');
const path = require('path');

class CruiseManager {
    constructor(baseDir) {
        this.baseDir = baseDir;
        this.reportsDir = path.join(baseDir, 'reports');
        this.logsDir = path.join(baseDir, 'logs');
        this.configFile = path.join(baseDir, 'config.json');
        this.stateFile = path.join(baseDir, 'state.json');
        
        this.ensureDirectories();
        this.loadState();
    }

    ensureDirectories() {
        [this.reportsDir, this.logsDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    loadState() {
        try {
            if (fs.existsSync(this.stateFile)) {
                this.state = JSON.parse(fs.readFileSync(this.stateFile, 'utf-8'));
            } else {
                this.state = this.getInitialState();
            }
        } catch (e) {
            this.state = this.getInitialState();
        }
    }

    getInitialState() {
        return {
            lastCruise: null,
            cruiseCount: 0,
            completedTasks: [],
            pendingTasks: [],
            errors: []
        };
    }

    saveState() {
        fs.writeFileSync(this.stateFile, JSON.stringify(this.state, null, 2), 'utf-8');
    }

    async executeCruise(tasks) {
        const cruiseId = `cruise_${Date.now()}`;
        const report = {
            id: cruiseId,
            startTime: new Date().toISOString(),
            tasks: [],
            status: 'in_progress'
        };

        console.log(`开始巡航: ${cruiseId}`);

        for (const task of tasks) {
            try {
                console.log(`执行任务: ${task.name}`);
                const result = await this.executeTask(task);
                const skipped = result && result.status === 'NO_OP';
                report.tasks.push({
                    task: task.name,
                    status: skipped ? 'skipped' : 'success',
                    result: result
                });
                if (!skipped) this.state.completedTasks.push(task.name);
            } catch (error) {
                console.error(`任务失败: ${task.name}`, error);
                report.tasks.push({
                    task: task.name,
                    status: 'failed',
                    error: error.message
                });
                this.state.errors.push({
                    task: task.name,
                    error: error.message,
                    time: new Date().toISOString()
                });
            }
        }

        report.endTime = new Date().toISOString();
        const succeeded = report.tasks.filter(t => t.status === 'success').length;
        const failed = report.tasks.filter(t => t.status === 'failed').length;
        report.status = failed ? 'PARTIAL' : succeeded ? 'COMPLETED' : 'NO_OP';
        if (report.status !== 'NO_OP') {
            this.state.lastCruise = cruiseId;
            this.state.cruiseCount++;
            this.saveReport(report);
            this.saveState();
        }

        console.log(`巡航完成: ${cruiseId}`);
        return report;
    }

    async executeTask(task) {
        // A missing or placeholder script is not evidence that a task ran.
        if (!task.script) return { status: 'NO_OP', reason: 'NO_SCRIPT' };
        const scriptPath = path.resolve(__dirname, task.script);
        if (!fs.existsSync(scriptPath)) throw new Error('SCRIPT_MISSING: ' + task.script);
        const worker = require(scriptPath);
        if (typeof worker === 'function') return await worker(task);
        if (worker && typeof worker.run === 'function') return await worker.run(task);
        return { status: 'NO_OP', reason: 'NO_EXECUTABLE_EXPORT' };
    }

    saveReport(report) {
        const reportFile = path.join(this.reportsDir, `report_${report.id}.json`);
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf-8');
        
        const summaryFile = path.join(this.reportsDir, 'latest_report.json');
        fs.writeFileSync(summaryFile, JSON.stringify(report, null, 2), 'utf-8');
    }

    getStatus() {
        return {
            state: this.state,
            reportsCount: fs.readdirSync(this.reportsDir).filter(f => f.startsWith('report_')).length
        };
    }

    generateDailyReport(date = new Date()) {
        const dateStr = date.toISOString().split('T')[0];
        const reportFile = path.join(this.reportsDir, `daily_report_${dateStr}.md`);
        
        const content = `# 每日巡航报告 - ${dateStr}

## 巡航状态
- 巡航ID: ${this.state.lastCruise || 'N/A'}
- 巡航次数: ${this.state.cruiseCount}
- 最后更新时间: ${new Date().toISOString()}

## 完成任务
${this.state.completedTasks.length > 0 
    ? this.state.completedTasks.map(t => `- ${t}`).join('\n')
    : '- 无'}

## 待处理任务
${this.state.pendingTasks.length > 0 
    ? this.state.pendingTasks.map(t => `- ${t}`).join('\n')
    : '- 无'}

## 错误记录
${this.state.errors.length > 0 
    ? this.state.errors.map(e => `- ${e.task}: ${e.error}`).join('\n')
    : '- 无'}

---
**生成时间**: ${new Date().toISOString()}
`;

        fs.writeFileSync(reportFile, content, 'utf-8');
        console.log(`每日报告已生成: ${reportFile}`);
        return reportFile;
    }
}

module.exports = CruiseManager;
