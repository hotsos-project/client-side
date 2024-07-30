import { colorSprinkles } from '../../style/color/colorSprinkles.css';
import { typographyRecipe } from '../../style/typography/typographyRecipes.css';
import { DefaultProps } from '../types';
import clsx from 'clsx';

/**
 * Text 컴포넌트
 *
 * @param {React.ReactNode} props.children - 텍스트 내용 (필수)
 * @param {TypographyVariants['textType']} [props.textType='body1'] - 텍스트 타입 (선택, 기본값: 'body1')
 * @param {TypographyVariants['textMode']} [props.textMode='default'] - 텍스트 모드 (선택, 기본값: 'default')
 * @param {React.ElementType} [props.as='p'] - 렌더링할 HTML 요소 (선택, 기본값: 'p')
 * @param {PaletteColors} [props.color='textNormal'] - 텍스트 색상 (선택, 기본값: 'textNormal')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export const Text: React.FC<DefaultProps> = ({
  children,
  textType = 'body1',
  textMode = 'default',
  as: Component = 'p',
  color = 'textNormal',
  className,
  ...props
}) => {
  const textClass = typographyRecipe({ textType, textMode });
  const colorClass = colorSprinkles({ color });

  const combinedClass = clsx([textClass, colorClass, className]);

  return (
    <Component className={combinedClass} {...props}>
      {children}
    </Component>
  );
};
