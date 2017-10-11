let merge = require('deepmerge');
let wdioConf = require('../../wdio.conf.js');

exports.config = merge(wdioConf.config, {
    capabilities: [
        {
            browserName: 'phantomjs'
        }
    ],
});


exports.config.services.push('phantomjs');