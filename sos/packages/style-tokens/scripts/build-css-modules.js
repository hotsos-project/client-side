import * as theme from '../dist/index.js';
import fs from 'fs';

// 카멜케이스를 케밥케이스로 변경하는 정규식
const toKebabCase = (str) => {
    return str
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .toLowerCase();
};

// css 변수 제작을 위한 파싱
const generateCssVariables = () => {
    // 변수 문자열을 담을 배열
    const cssString = [];

    Object.entries(theme.vars).forEach(([key, value]) => {
        // 색
        if (key === 'color') {
            Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
                const selector = colorKey === 'light'? ':root' : ':root .dark';

                const cssVariables = Object.entries(colorValue).map(
                    ([mainKey, mainValue]) => Object.entries(mainValue)
                        .map(([subKey, subValue]) => {
                            return `\t--${toKebabCase(mainKey)}-${toKebabCase(subKey)}: ${subValue};`;
                        }).join('\n') // 줄바꿈
                ).join('\n\n'); // 줄바꿈

                // 문자열을 배열에 추가
                return cssString.push(`${selector} {\n${cssVariables}\n}`);
            });
            return;
        }

        // 그 외
        const selector = ':root';

        const cssVariables = Object.entries(value).map(
            ([mainKey, mainValue]) => Object.entries(mainValue)
                .map(([subKey, subValue]) => {
                    return `\t--${toKebabCase(mainKey)}-${toKebabCase(subKey)}: ${subValue};`;
                }).join('\n') // 줄바꿈
        ).join('\n\n'); // 줄바꿈

        // 문자열을 배열에 추가
        return cssString.push(`${selector} {\n${cssVariables}\n}`);
    });
    return cssString;
}

// css 클래스 제작을 위한 파싱
const generateCssClasses = () => {
    const cssString = [];

    Object.entries(theme.classes).forEach(([, value]) => {
        const cssClasses = Object.entries(value)
            .map(([mainKey, mainValue]) => {
                return Object.entries(mainValue)
                    .map(([subKey, subValue]) => {
                        const className = `.${toKebabCase(mainKey)}-${toKebabCase(subKey)}`;
                        const styleProperties = Object.entries(subValue)
                            .map(([styleKey, styleValue]) => {
                                return `\t${toKebabCase(styleKey)}: ${styleValue};`;
                            }).join('\n');
                        return `${className} {\n${styleProperties}\n}`;
                    }).join('\n\n');
            }).join('\n\n');

        cssString.push(cssClasses);
    });

    return cssString;
}

// 일반 css variable 파일 만들기
const generateCssFile = () => {
    const variables = generateCssVariables();
    const classes = generateCssClasses();

    // 추가된 문자열 배열을 풀어서 넣어주기
    fs.writeFileSync('dist/style-tokens.css', [...variables, ...classes].join('\n\n'));
}

generateCssFile();