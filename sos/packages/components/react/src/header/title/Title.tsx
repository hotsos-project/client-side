import { titleStyle } from './title.css';
import { Text } from '../../common/text/Text';
import { PaletteColors } from '../../style/color/colorSprinkles.css';

type TitleProps = {
  children: React.ReactNode;
  color?: PaletteColors;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children = '제목', color = 'textNormal', className, ...props }) => {
  const titleClass = titleStyle;

  return (
    <Text className={`${titleClass} ${className || ''}`} type="title2" mode="bold" as="h1" color={color} {...props}>
      {children}
    </Text>
  );
};
