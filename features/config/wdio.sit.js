let merge = require('deepmerge');
let wdioConf = require('../../wdio.conf.js');

exports.config = merge(wdioConf.config, {
    capabilities: [
        {
            browserName: 'chrome'
        }
    ],
    baseUrl: 'https://www.google.com.hk',
});

