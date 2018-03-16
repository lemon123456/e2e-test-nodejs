import {Launcher} from 'webdriverio';
import {start as startSeleniumServer} from './infra/seleniumServer';
import path from 'path';

const wdio = new Launcher(path.join(__dirname, './wdio.conf.js'));

Promise.all([
    startSeleniumServer({})
])
.then(() => wdio.run())
.then(code => proces.exit(code))
.catch(error => {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
});