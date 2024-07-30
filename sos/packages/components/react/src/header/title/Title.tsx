import { titleStyle } from './title.css';
import { Text } from '../../common/text/Text';
import { DefaultProps } from '../../common/types';

interface TitleProps extends DefaultProps {
  children: React.ReactNode;
}

/**
 * Title 컴포넌트
 *
 * @param {React.ReactNode} props.children - 제목 내용 (필수)
 * @param {PaletteColors} [props.color='textNormal'] - 제목 색상 (선택, 기본값: 'textNormal')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export const Title: React.FC<TitleProps> = ({ children = '제목', color = 'textNormal', className, ...props }) => {
  const titleClass = titleStyle;

  return (
    <Text className={`${titleClass} ${className || ''}`} type="title2" mode="bold" as="h1" color={color} {...props}>
      {children}
    </Text>
  );
};
