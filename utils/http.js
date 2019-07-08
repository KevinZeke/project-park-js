const Network = require('miniprogram-network');

Network.setConfig('baseURL', 'https://www.acfun.cn/');
// 也可Network.REQUEST.Defaults,Network.DOWNLOAD.Defaults,Network.UPLOAD.Defaults 分别设置不同默认配置
Network.REQUEST.Defaults.transformResponse = Network.transformRequestResponseOkData;

export let testGet = () => Network.get('a/ac10399093');

