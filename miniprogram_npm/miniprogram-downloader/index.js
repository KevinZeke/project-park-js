module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1562552101845, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_network_life_cycle_1 = require("miniprogram-network-life-cycle");
exports.CancelToken = miniprogram_network_life_cycle_1.CancelToken;
var downloader_1 = require("./downloader");
exports.Downloader = downloader_1.Downloader;
var transform_1 = require("./transform");
exports.transfomDownloadSendDefault = transform_1.transfomDownloadSendDefault;
exports.transformDownloadResponseOkData = transform_1.transformDownloadResponseOkData;
var downloader_2 = require("./downloader");
/**
 * 预定义全局Download
 */
// tslint:disable-next-line: export-name
exports.DOWNLOAD = new downloader_2.Downloader();
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./downloader":1562552101846,"./transform":1562552101847}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1562552101846, function(require, module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_network_life_cycle_1 = require("miniprogram-network-life-cycle");
var transform_1 = require("./transform");
/**
 * 下载封装
 * @template T 扩展参数类型
 */
var Downloader = /** @class */ (function (_super) {
    __extends(Downloader, _super);
    /**
     * 新建 Http实列
     * @param config 全局默认配置
     * @param downloader 下载处理方法，默认使用下载队列处理
     * @param listeners 下载事件监听回调
     */
    function Downloader(config, downloader, listeners) {
        return _super.call(this, 
        // tslint:disable-next-line: no-use-before-declare
        downloader || wx.downloadFile, 
        // tslint:disable-next-line: no-object-literal-type-assertion
        config || { transformSend: transform_1.transfomDownloadSendDefault }, listeners) || this;
    }
    Downloader.prototype.download = function () {
        var isMultiParam = typeof arguments[0] === 'string';
        // tslint:disable-next-line: no-unsafe-any
        var options = isMultiParam ? (arguments[2] || {}) : arguments[0];
        if (isMultiParam) {
            options.url = arguments[0];
            options.filePath = arguments[1];
        }
        return this.process(options);
    };
    return Downloader;
}(miniprogram_network_life_cycle_1.LifeCycle));
exports.Downloader = Downloader;
//# sourceMappingURL=downloader.js.map
}, function(modId) { var map = {"./transform":1562552101847}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1562552101847, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_network_utils_1 = require("miniprogram-network-utils");
/**
 * 默认下载请求参数构建方法
 * @param data - 完整配置参数
 */
function transfomDownloadSendDefault(data) {
    return miniprogram_network_utils_1.getCommonOptions({
        url: miniprogram_network_utils_1.buildParams(data.url, data.params, data.baseURL),
        header: data.headers
    }, data, ['filePath']);
}
exports.transfomDownloadSendDefault = transfomDownloadSendDefault;
/**
 * 正确返回返回数据处理方式
 * @param res - 返回结果
 * @param config - 完整参数
 */
function transformDownloadResponseOkData(res, options) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
        throw res;
    }
    return res.tempFilePath;
}
exports.transformDownloadResponseOkData = transformDownloadResponseOkData;
//# sourceMappingURL=transform.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1562552101845);
})()
//# sourceMappingURL=index.js.map