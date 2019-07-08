module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1562552101863, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var uploader_1 = require("./uploader");
var miniprogram_network_life_cycle_1 = require("miniprogram-network-life-cycle");
exports.CancelToken = miniprogram_network_life_cycle_1.CancelToken;
var transform_1 = require("./transform");
exports.transformUploadResponseOkData = transform_1.transformUploadResponseOkData;
exports.transformUploadSendDefault = transform_1.transformUploadSendDefault;
var uploader_2 = require("./uploader");
exports.Uploader = uploader_2.Uploader;
/**
 * 预定义全局 Upload 对象
 */
// tslint:disable-next-line: export-name
exports.UPLOAD = new uploader_1.Uploader();
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./uploader":1562552101864,"./transform":1562552101865}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1562552101864, function(require, module, exports) {

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
 * 上传管理
 */
var Uploader = /** @class */ (function (_super) {
    __extends(Uploader, _super);
    /**
     * 默认上传请求参数转换函数
     */
    // protected readonly TransformSendDefault = transformUploadSendDefault;
    /**
     * 创建Upload管理
     * @param config 全局配置
     * @param uploader 操作函数,默认使用上传队列
     * @param listeners 上传事件监听通知
     */
    function Uploader(config, uploader, listeners) {
        return _super.call(this, 
        // tslint:disable-next-line: no-use-before-declare
        uploader || wx.uploadFile, config || { transformSend: transform_1.transformUploadSendDefault }, listeners) || this;
    }
    Uploader.prototype.upload = function () {
        var argNum = arguments.length;
        var options = argNum === 1 ? arguments[0] : (arguments[4] || {});
        if (argNum > 1) {
            options.filePath = arguments[0];
            options.name = arguments[1];
            options.url = arguments[2];
            options.data = arguments[3];
        }
        return this.process(options);
    };
    return Uploader;
}(miniprogram_network_life_cycle_1.LifeCycle));
exports.Uploader = Uploader;
//# sourceMappingURL=uploader.js.map
}, function(modId) { var map = {"./transform":1562552101865}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1562552101865, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var miniprogram_network_utils_1 = require("miniprogram-network-utils");
/**
 * 构建请求参数
 * baseUrl和dataUrl不同时为空
 * @param data - 完整参数
 */
function transformUploadSendDefault(data) {
    return miniprogram_network_utils_1.getCommonOptions({
        url: miniprogram_network_utils_1.buildParams(data.url || '', data.params, data.baseURL),
        formData: data.data,
        header: data.headers
    }, data, ['filePath', 'name']);
}
exports.transformUploadSendDefault = transformUploadSendDefault;
/**
 * 根据错误码处理数据(会尝试JSON.parse)
 * statusCode 2xx 操作成功仅返回data数据
 * 否则抛出错误(rejected)
 * @param res - 返回结果
 * @param options - 全部配置
 * @returns 反序列化对象
 */
function transformUploadResponseOkData(res, options) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
        throw res;
    }
    if (typeof res.data === 'string') {
        try {
            return JSON.parse(res.data);
        }
        catch (_a) {
            // empty
        }
    }
    return res.data;
}
exports.transformUploadResponseOkData = transformUploadResponseOkData;
//# sourceMappingURL=transform.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1562552101863);
})()
//# sourceMappingURL=index.js.map