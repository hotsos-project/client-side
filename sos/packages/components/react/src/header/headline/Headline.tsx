import { Text } from '../../common/text/Text';
import { headlineStyle, iconStyle, headlineSubStyle } from './headline.css';
import { DefaultProps } from '../../common/types';

interface HeadlineProps extends DefaultProps {
  mainText: string;
  subText?: string;
  icon?: boolean;
}

/**
 * Headline 컴포넌트
 *
 * @param {string} props.mainText - 헤드라인의 주요 텍스트 (필수)
 * @param {string} [props.subText='subText'] - 헤드라인의 부가 텍스트 (선택, 기본값: 'subText')
 * @param {boolean} [props.icon=true] - 아이콘 표시 여부 (선택, 기본값: true)
 * @param {PaletteColors} [props.color='textNormal'] - 헤드라인 색상 (선택, 기본값: 'textNormal')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export const Headline: React.FC<HeadlineProps> = ({
  mainText = 'mainText',
  subText = 'subText',
  icon = true,
  color = 'textNormal',
  className,
  ...props
}) => {
  const headlineClass = headlineStyle;
  const iconClass = icon ? iconStyle : '';
  const headlineSubClass = headlineSubStyle;

  return (
    <div className={`${headlineClass} ${className || ''}`} {...props}>
      <Text type="heading2" mode="bold" as="h3" color={color}>
        {mainText}
      </Text>
      <div className={headlineSubClass}>
        {subText && (
          <Text type="body3" as="p" color="textAssistive">
            {subText}
          </Text>
        )}
        {icon && <span className={`${iconClass} material-symbols-outlined`}>{'chevron_right'}</span>}
      </div>
    </div>
  );
};
