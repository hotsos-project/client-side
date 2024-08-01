import { forwardRef } from 'react';
import { CommonProps } from '../../../common/types';
import { Container } from '../../../common/container/Container';
import { Text } from '../../../common/text/Text';
import { Icon } from '../../../common/icon/Icon';

export interface InfoItemProps extends CommonProps {
  title: string;
  content: string;
  icon?: string;
  size?: 's' | 'm';
}

const sizeVariants = {
  s: {
    paddingTop: 12 as const,
    paddingBottom: 16 as const,
    titleTextType: 'footnote' as const,
    contentTextType: 'body2' as const,
    iconSize: 16,
  },
  m: {
    paddingTop: 16 as const,
    paddingBottom: 20 as const,
    titleTextType: 'label' as const,
    contentTextType: 'headline' as const,
    iconSize: 18,
  },
};

/**
 * InfoItem 컴포넌트
 *
 * @param {string} [props.title='title'] - 아이템의 제목 (필수, 기본값: 'title')
 * @param {string} [props.content='content'] - 아이템의 내용 (필수, 기본값: 'content')
 * @param {string} [props.icon] - 아이콘 이름 (선택)
 * @param {'s' | 'm'} [props.size='m'] - 아이템의 크기 (선택, 기본값: 'm')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - Container 컴포넌트에 전달될 기타 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export const InfoItem = forwardRef<HTMLElement, InfoItemProps>(
  ({ title = 'title', content = 'content', icon, size = 'm', className, ...props }, ref) => {
    const { paddingTop, paddingBottom, titleTextType, contentTextType, iconSize } =
      sizeVariants[size];

    return (
      <Container
        ref={ref}
        className={className}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        height="100%"
        paddingX={10}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        gap={8}
        {...props}
      >
        <Text textType={titleTextType} textAlign="center" color="textAssistive">
          {title}
        </Text>
        <Container display="flex" alignItems="center" gap={6}>
          {icon && (
            <Icon color="textAlternative" size={iconSize}>
              {icon}
            </Icon>
          )}
          <Text textType={contentTextType} textMode="bold" textAlign="center">
            {content}
          </Text>
        </Container>
      </Container>
    );
  },
);
