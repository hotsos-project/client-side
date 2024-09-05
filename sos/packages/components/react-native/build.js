/* eslint-disable no-redeclare */
import { createRequire } from 'module';
import runBuild from '@sos/esbuild-config';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const config = {
  platform: 'neutral',
  plugins: [vanillaExtractPlugin()],
};

runBuild({
  pkg,
  config,
});