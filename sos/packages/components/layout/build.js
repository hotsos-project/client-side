import { createRequire } from 'module';
import runBuild from '@sos/esbuild-config';
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin"

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const config = {
    plugins: [vanillaExtractPlugin()]
};

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

runBuild({
    pkg,
    config,
    onBuildEnd: () => {
        runTSCBuild();
    }
});