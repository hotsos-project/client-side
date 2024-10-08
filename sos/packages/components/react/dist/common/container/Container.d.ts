import { CommonProps } from '../types';
/**
 * Container 컴포넌트
 *
 * * 기본 속성:
 * @param {React.ReactNode} props.children - 컨테이너 내부 컨텐츠 (필수)
 * @param {React.ElementType} [props.as='div'] - 렌더링할 HTML 요소 (선택, 기본값: 'div')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 *
 * * 레이아웃 관련 속성:
 * @param {string} [props.display] - display 속성 (선택)
 * @param {string} [props.flexDirection] - flex-direction 속성 (선택)
 * @param {string} [props.justifyContent] - justify-content 속성 (선택)
 * @param {string} [props.alignItems] - align-items 속성 (선택)
 * @param {number|string} [props.width] - 너비 (선택)
 * @param {number|string} [props.height] - 높이 (선택)
 *
 * * 간격 관련 속성:
 * @param {number} [props.margin] - 전체 마진 (선택)
 * @param {number} [props.padding] - 전체 패딩 (선택)
 * @param {number} [props.marginX] - 가로 마진 (선택)
 * @param {number} [props.marginY] - 세로 마진 (선택)
 * @param {number} [props.paddingX] - 가로 패딩 (선택)
 * @param {number} [props.paddingY] - 세로 패딩 (선택)
 * @param {number} [props.marginTop] - 상단 마진 (선택)
 * @param {number} [props.marginRight] - 우측 마진 (선택)
 * @param {number} [props.marginBottom] - 하단 마진 (선택)
 * @param {number} [props.marginLeft] - 좌측 마진 (선택)
 * @param {number} [props.paddingTop] - 상단 패딩 (선택)
 * @param {number} [props.paddingRight] - 우측 패딩 (선택)
 * @param {number} [props.paddingBottom] - 하단 패딩 (선택)
 * @param {number} [props.paddingLeft] - 좌측 패딩 (선택)
 * @param {number} [props.gap] - 간격 (선택)
 * @param {number} [props.rowGap] - 행 간격 (선택)
 * @param {number} [props.columnGap] - 열 간격 (선택)
 *
 * * 배경 관련 속성:
 * @param {string} [props.backgroundColor] - 배경색 (선택)
 *
 * * 테두리 관련 속성:
 * @param {number} [props.borderRadius] - 테두리 반경 (선택)
 * @param {BorderVariants['borderType']} [props.borderType] - 테두리 타입 (선택)
 * @param {string} [props.borderColor] - 테두리 색상 (선택)
 * @param {string} [props.borderStyle] - 테두리 스타일 (선택)
 * @param {number} [props.borderWidth] - 테두리 두께 (선택)
 * @param {string} [props.borderBottomColor] - 하단 테두리 색상 (선택)
 * @param {string} [props.borderLeftColor] - 좌측 테두리 색상 (선택)
 * @param {string} [props.borderRightColor] - 우측 테두리 색상 (선택)
 * @param {string} [props.borderTopColor] - 상단 테두리 색상 (선택)
 * @param {string} [props.borderBottomStyle] - 하단 테두리 스타일 (선택)
 * @param {string} [props.borderLeftStyle] - 좌측 테두리 스타일 (선택)
 * @param {string} [props.borderRightStyle] - 우측 테두리 스타일 (선택)
 * @param {string} [props.borderTopStyle] - 상단 테두리 스타일 (선택)
 * @param {number} [props.borderBottomWidth] - 하단 테두리 두께 (선택)
 * @param {number} [props.borderLeftWidth] - 좌측 테두리 두께 (선택)
 * @param {number} [props.borderRightWidth] - 우측 테두리 두께 (선택)
 * @param {number} [props.borderTopWidth] - 상단 테두리 두께 (선택)
 *
 * * 그림자 관련 속성:
 * @param {string} [props.boxShadow] - 그림자 효과 (선택)
 *
 * * 기타:
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const Container: import("react").ForwardRefExoticComponent<CommonProps & import("react").RefAttributes<HTMLElement>>;
