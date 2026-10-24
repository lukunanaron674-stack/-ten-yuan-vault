const fs = require('fs');
const path = require('path');

class TaskScheduler {
    constructor(configFile) {
        this.configFile = configFile || path.join(__dirname, 'tasks_config.json');
        this.loadConfig();
    }

    loadConfig() {
        try {
            if (fs.existsSync(this.configFile)) {
                this.config = JSON.parse(fs.readFileSync(this.configFile, 'utf-8'));
            } else {
                this.config = this.getDefaultConfig();
                this.saveConfig();
            }
        } catch (e) {
            this.config = this.getDefaultConfig();
        }
    }

    saveConfig() {
        fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2), 'utf-8');
    }

    getDefaultConfig() {
        return {
            schedule: {
                daily: '08:00',
                weekly: 'monday 09:00',
                monthly: '1st 10:00'
            },
            tasks: {
                daily: [
                    { name: '更新角色库索引', script: null, enabled: true },
                    { name: '检查链接有效性', script: '../runtime/scripts/check_links.js', enabled: true },
                    { name: '生成每日报告', script: null, enabled: true }
                ],
                weekly: [
                    { name: '生成周任务清单', script: null, enabled: true },
                    { name: '更新可视化资源', script: null, enabled: true },
                    { name: '执行质量检查', script: '../runtime/scripts/quality_check.js', enabled: true }
                ],
                monthly: [
                    { name: '生成月度归档报告', script: null, enabled: true },
                    { name: '更新五元统计', script: '../runtime/scripts/analyze_wuyuan_distribution.js', enabled: true },
                    { name: '清理过期文件', script: null, enabled: true }
                ]
            },
            notifications: {
                enabled: true,
                email: null,
                webhook: null
            }
        };
    }

    getTasks(frequency) {
        return this.config.tasks[frequency]?.filter(t => t.enabled) || [];
    }

    addTask(frequency, task) {
        if (!this.config.tasks[frequency]) {
            this.config.tasks[frequency] = [];
        }
        this.config.tasks[frequency].push(task);
        this.saveConfig();
    }

    removeTask(frequency, taskName) {
        if (this.config.tasks[frequency]) {
            this.config.tasks[frequency] = this.config.tasks[frequency].filter(t => t.name !== taskName);
            this.saveConfig();
        }
    }

    enableTask(frequency, taskName) {
        const task = this.config.tasks[frequency]?.find(t => t.name === taskName);
        if (task) {
            task.enabled = true;
            this.saveConfig();
        }
    }

    disableTask(frequency, taskName) {
        const task = this.config.tasks[frequency]?.find(t => t.name === taskName);
        if (task) {
            task.enabled = false;
            this.saveConfig();
        }
    }

    updateSchedule(frequency, time) {
        this.config.schedule[frequency] = time;
        this.saveConfig();
    }

    getNextRunTime(frequency) {
        const schedule = this.config.schedule[frequency];
        if (!schedule) return null;

        const [hour, minute] = schedule.split(':').map(Number);
        const now = new Date();
        const next = new Date();
        next.setHours(hour, minute, 0, 0);

        if (next <= now) {
            next.setDate(next.getDate() + 1);
        }

        return next.toISOString();
    }

    getStatus() {
        return {
            schedule: this.config.schedule,
            tasksCount: {
                daily: this.getTasks('daily').length,
                weekly: this.getTasks('weekly').length,
                monthly: this.getTasks('monthly').length
            },
            nextRuns: {
                daily: this.getNextRunTime('daily'),
                weekly: this.getNextRunTime('weekly'),
                monthly: this.getNextRunTime('monthly')
            }
        };
    }
}

module.exports = TaskScheduler;
