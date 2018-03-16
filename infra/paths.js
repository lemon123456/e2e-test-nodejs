const path = require('path');
const projectDir = path.join(__dirname, '..');

module.exports.chromeBinary = `${projectDir}/tools/chromium/chrome.exe`;
module.exports.chromeDriverPath = `${projectDir}/tools/chromedriver/chromedriver.exe`;