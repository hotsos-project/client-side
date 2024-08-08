import { Text } from '../../common/text/Text';
import { Container } from '../../common/container/Container';
import { Icon } from '../../common/icon/Icon';
import { CommonProps } from '../../common/types';
import { headlineStyle, iconStyle, headlineSubStyle } from './style.css';
import React from 'react';

interface HeadlineProps extends CommonProps {
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
export const Headline = React.forwardRef<HTMLDivElement, HeadlineProps>(
  (
    { mainText = 'mainText', subText, icon = false, color = 'textNormal', className, ...props },
    ref,
  ) => {
    return (
      <Container
        display="flex"
        paddingLeft={16}
        paddingRight={4}
        paddingY={10}
        ref={ref}
        className={className}
        {...props}
      >
        <Text textType="heading2" textMode="bold" as="h3" color={color}>
          {mainText}
        </Text>
        <Container className={headlineSubStyle}>
          {subText && (
            <Text textType="body3" as="p" color="textAssistive">
              {subText}
            </Text>
          )}
          {icon && <Icon>{icon}</Icon>}
        </Container>
      </Container>
    );
  },
);

Headline.displayName = 'Headline';
