import run from '@sos/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})