var obsidian = require('obsidian');
var VIEW_TYPE = 'brain-map-view';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== 'function' && b !== null)
            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BrainMapView = (function (_super) {
    __extends(BrainMapView, _super);
    function BrainMapView(leaf) {
        var _this = _super.call(this, leaf) || this;
        return _this;
    }
    BrainMapView.prototype.getViewType = function () { return VIEW_TYPE; };
    BrainMapView.prototype.getDisplayText = function () { return '十元知识蓝图'; };
    BrainMapView.prototype.getIcon = function () { return 'git-branch'; };
    BrainMapView.prototype.onOpen = function () {
        var el = this.containerEl.children[1];
        el.empty();
        el.style.padding = '0';
        el.style.overflow = 'hidden';
        
        var defaultUrl = 'http://localhost:8765/editor.html';
        var serverUrl = this.plugin && this.plugin.settings && this.plugin.settings.serverUrl 
            ? this.plugin.settings.serverUrl 
            : defaultUrl;
        
        var iframe = el.createEl('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        
        var statusEl = el.createDiv({ cls: 'brain-map-status' });
        statusEl.style.cssText = 'padding:20px;text-align:center;color:#888;';
        statusEl.textContent = '正在连接服务器...';
        
        fetch(serverUrl.replace('/editor.html', '/health'), { method: 'HEAD', mode: 'no-cors' })
            .then(function() {
                statusEl.style.display = 'none';
                iframe.src = serverUrl;
            })
            .catch(function(err) {
                statusEl.innerHTML = '<div style="color:#e74c3c;">⚠️ 无法连接到服务器</div>' +
                    '<div style="margin-top:10px;font-size:12px;">请确保本地服务器正在运行: ' + serverUrl + '</div>' +
                    '<div style="margin-top:10px;font-size:12px;color:#666;">错误: ' + err.message + '</div>';
            });
    };
    BrainMapView.prototype.onClose = function () {};
    return BrainMapView;
}(obsidian.ItemView));

var TenYuanBrainPlugin = (function (_super) {
    __extends(TenYuanBrainPlugin, _super);
    function TenYuanBrainPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TenYuanBrainPlugin.prototype.onload = function () {
        this.registerView(VIEW_TYPE, function (leaf) {
            return new BrainMapView(leaf);
        });
        this.addRibbonIcon('git-branch', '十元蓝图', function () {
            var ws = this.app.workspace;
            var leaf = ws.getLeavesOfType(VIEW_TYPE)[0];
            if (!leaf) {
                ws.getRightLeaf(false).setViewState({ type: VIEW_TYPE, active: true });
                return;
            }
            ws.revealLeaf(leaf);
        }.bind(this));
        this.addCommand({
            id: 'open-brain-map',
            name: '打开知识蓝图',
            callback: function () {
                var ws = this.app.workspace;
                var leaf = ws.getLeavesOfType(VIEW_TYPE)[0];
                if (!leaf) {
                    ws.getRightLeaf(false).setViewState({ type: VIEW_TYPE, active: true });
                    return;
                }
                ws.revealLeaf(leaf);
            }.bind(this)
        });
    };
    TenYuanBrainPlugin.prototype.onunload = function () {};
    return TenYuanBrainPlugin;
}(obsidian.Plugin));

module.exports = TenYuanBrainPlugin;