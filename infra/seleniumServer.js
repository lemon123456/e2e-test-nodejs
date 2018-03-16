import rp from 'request-promise';
import childProcess from 'child_process';
import {path as standaloneJarPath} from 'selenium-server-standalone-jar';
import * as paths from './paths';

export const start = ({javaHome = process.env.JAVA_HOME, logDir = './log', host = 'localhost', port = 4444}) => {
    console.info('starting selenium server ...');

    const child = childProcess.spawn(`${javaHome}/bin/java`,
        [
            `-Dwebdriver.chrome.driver=${paths.chromeDriverPath}`,
            '-jar',
            standaloneJarPath,
            '-log',
            `${logDir}/selenium-server.log`,
            '-port',
            port
        ])
        .on('error', (err) => {
            console.error(err);
        });

    const seleniumIsRunning = () => {
        const url = `http://${host}/wd/hub/status`;
        return new Promise((resolve, reject) => {
            return rp({uri: url, json: true})
                .then(res => {
                    console.info('selenium server status', res.response);
                    res.status === 0? resolve() : reject();
                })
                .catch(error => {
                    reject(error);
                })
        });
    };

    const waitForCondition = (validate, interval = 500, maxTimeout = 30000) =>
        new Promise((resolve, reject) => {
            let time = 0;
            (function waitFor() {
                validate().then(
                    resolve,
                    (err) => {
                        if (time < maxTimeout) {
                            time += interval;
                            setTimeout(waitFor, interval);
                        } else {
                            console.log(err);
                            reject(`Condition not met after ${time / 100}s`);
                        }
                    })
            })();
        });

    return waitForCondition(seleniumIsRunning).then(() => child);
};