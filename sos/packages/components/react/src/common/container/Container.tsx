import { forwardRef } from 'react';
import { DefaultProps } from '../types';
import { colorSprinkles } from '../../style/color/colorSprinkles.css';
import { spacingSprinkles } from '../../style/spacing/spacingSprinkles.css';
import { layoutSprinkles } from '../../style/layout/layoutSprinkles.css';
import { borderSprinkles } from '../../style/border/borderSprinkles.css';
import { borderRecipe } from '../../style/border/borderRecipes.css';
import { shadowSprinkles } from '../../style/shadow/shadowSprinkles.css';
import clsx from 'clsx';

/**
 * Container 컴포넌트
 *
 * @param {React.ReactNode} props.children - 컨테이너 내부 컨텐츠 (필수)
 * @param {React.ElementType} [props.as='div'] - 렌더링할 HTML 요소 (선택, 기본값: 'div')
 * @param {number} [props.width] - 너비 (선택)
 * @param {number} [props.height] - 높이 (선택)
 * @param {string} [props.backgroundColor] - 배경색 (선택)
 * @param {number} [props.margin] - 마진 (선택)
 * @param {number} [props.padding] - 패딩 (선택)
 * @param {number} [props.marginX] - 가로 마진 (선택)
 * @param {number} [props.marginY] - 세로 마진 (선택)
 * @param {number} [props.paddingX] - 가로 패딩 (선택)
 * @param {number} [props.paddingY] - 세로 패딩 (선택)
 * @param {number} [props.gap] - 간격 (선택)
 * @param {number} [props.rowGap] - 행 간격 (선택)
 * @param {number} [props.columnGap] - 열 간격 (선택)
 * @param {string} [props.display] - display 속성 (선택)
 * @param {string} [props.flexDirection] - flex-direction 속성 (선택)
 * @param {string} [props.justifyContent] - justify-content 속성 (선택)
 * @param {string} [props.alignItems] - align-items 속성 (선택)
 * @param {number} [props.borderRadius] - 테두리 반경 (선택)
 * @param {BorderVariants['borderType']} - 테두리 타입 (선택)
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
 * @param {string} [props.boxShadow] - 그림자 효과 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export const Container = forwardRef<HTMLElement, DefaultProps>(
  (
    {
      children,
      as: Component = 'div',
      width,
      height,
      backgroundColor,
      margin,
      padding,
      marginX,
      marginY,
      paddingX,
      paddingY,
      gap,
      rowGap,
      columnGap,
      display,
      flexDirection,
      justifyContent,
      alignItems,
      borderRadius,
      borderType,
      borderColor,
      borderStyle,
      borderWidth,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      borderTopColor,
      borderBottomStyle,
      borderLeftStyle,
      borderRightStyle,
      borderTopStyle,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
      boxShadow,
      className,
      ...props
    },
    ref,
  ) => {
    const backgroundColorClass = backgroundColor ? colorSprinkles({ backgroundColor }) : '';
    const spacingClass = spacingSprinkles({ margin, padding, marginX, marginY, paddingX, paddingY, gap, rowGap, columnGap });
    const layoutClass = layoutSprinkles({ display, flexDirection, justifyContent, alignItems });
    const borderRecipeClass = borderRecipe({ borderType });
    const borderClass = borderSprinkles({
      borderColor,
      borderRadius,
      borderStyle,
      borderWidth,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      borderTopColor,
      borderBottomStyle,
      borderLeftStyle,
      borderRightStyle,
      borderTopStyle,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
    });
    const shadowClass = shadowSprinkles({ boxShadow });

    const combinedClass = clsx([backgroundColorClass, spacingClass, layoutClass, borderRecipeClass, borderClass, shadowClass, className]);
    const containerStyle = { width: `${width}px`, height: `${height}px` };

    return (
      <Component ref={ref} className={combinedClass} style={containerStyle} {...props}>
        {children}
      </Component>
    );
  },
);
