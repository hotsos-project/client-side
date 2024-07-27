/* eslint-disable no-redeclare */
import { createRequire } from 'module';
import { exec } from 'child_process';
import runBuild from '@sos/esbuild-config';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

function runTSCBuild() {
    exec('npm run build:type', (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(stdout);
        if (stderr) console.error(stderr);
    });
}

function runCssBuild() {
    exec('npm run build:css', (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(stdout);
        if (stderr) console.error(stderr);
    });
}

runBuild({
    pkg,
    onBuildEnd: () => {
        runTSCBuild();
        runCssBuild();
    }
});