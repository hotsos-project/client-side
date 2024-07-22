import { createRequire } from 'module';
import esbuild from 'esbuild';
import { exec } from 'child_process';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

/**
 * 개발 환경(dev) 에서의 설정
 */
const dev = process.argv.includes('--dev'); // 명령줄 인자(arguments)를 확인
const minify = !dev; // 만약 dev라면 minify 설정 해제

const watch = process.argv.includes('--watch'); // watch 모드는 만약 변화가 있다면 알아서 다시 빌드하도록 하는 것

const external = Object.keys({
    ...pkg.devDependencies,
    ...pkg.peerDependencies,
})

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

/**
 * 빌드 설정
 */
const baseConfig = {
    // 빌드할 파일 위치: 번들링할 엔트리 포인트 파일 경로를 지정
    entryPoints: ['src/index.ts'],
    // 번들링 설정: 모든 의존성 파일들을 하나의 파일로 번들링
    bundle: true,
    // 파일 압축: 코드를 간결하게 (minify) 작성하여 파일 크기를 줄임
    minify,
    // 소스맵 생성: 디버깅을 위해 소스맵 파일 생성
    sourcemap: true,
    // 파일 생성 위치: 컴파일된 파일이 저장될 디렉토리 경로
    outdir: 'dist',
    // 타겟 설정: ES2019 버전을 타겟으로 컴파일
    target: 'es2019',
    // 번들링 제외: 명시된 모듈들은 번들링에서 제외
    external,
};

/**
 * js(ESModule), cjs(commonJS) 파일 생성
 * -> 병렬 처리를 위해서 Promise.all
 */
async function build() {
    // ESModule 설정
    const esmConfig = {
        ...baseConfig,
        format: 'esm',
    };

    // CommonJS 설정
    const cjsConfig = {
        ...baseConfig,
        format: 'cjs',
        outExtension: {
            ".js": ".cjs", // 확장자 변경 (겹치지 않게)
        },
    };

    if (watch) {
        // 만약 watch 한다면,
        // 플러그인 설정
        const plugins = [{
            name: 'run-css-plugin',
            setup(build) {
                build.onEnd(result => {
                    runTSCBuild(); // 빌드 끝나는 시점에 ts 컴파일 실행
                    runCssBuild(); // 빌드 끝나는 시점에 css 파싱 실행
                });
            },
        }];

        // ESM 빌드에만 plugin 적용
        const ctxESM = await esbuild.context({...esmConfig, plugins});
        const ctxCJS = await esbuild.context(cjsConfig);

        await Promise.all([
            ctxESM.watch(),
            ctxCJS.watch(),
        ]);
        console.log('Watching for update');
    } else {
        // 아니라면 그냥 build
        await Promise.all([
            esbuild.build(esmConfig),
            esbuild.build(cjsConfig),
        ]);
    }
}

// build 및 에러 핸들링
build().catch((error) => {
    console.error("Build failed with error:", error);
    process.exit(1);
});