import { colorSprinkles, PaletteColors } from '../../style/color/colorSprinkles.css';
import { typographyRecipe, TypographyVariants } from '../../style/typography/typographyRecipe.css';
import { AsProps } from '../types';

interface TextProps extends TypographyVariants, AsProps {
  children: React.ReactNode;
  color?: PaletteColors;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  type = 'body1',
  weight = 'regular',
  mode = 'default',
  as: Component = 'p',
  color = 'textNormal',
  className,
  ...props
}) => {
  const textClass = typographyRecipe({ type, weight, mode });
  const colorClass = colorSprinkles({ color });

  return (
    <Component className={`${textClass} ${colorClass} ${className || ''}`} {...props}>
      {children}
    </Component>
  );
};
