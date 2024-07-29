import { typographyRecipe, TypographyVariants } from './recipe.css';

interface TypographyProps extends TypographyVariants {
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = 'body1',
  weight = 'regular',
  mode = 'default',
  className,
  ...props
}) => {
  const textClass = typographyRecipe({ type, weight, mode });

  return (
    <span className={`${textClass} ${className || ''}`} {...props}>
      {children}
    </span>
  );
};
