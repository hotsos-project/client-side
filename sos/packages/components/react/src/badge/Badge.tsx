import { forwardRef } from 'react';
import { CommonProps } from '../common/types';
import { Container } from '../common/container/Container';
import { Text } from '../common/text/Text';
import { badgeRecipe, BadgeVariants } from './style.css';
import clsx from 'clsx';

// 지정된 색이 있는 경우 color props type 제외
type BadgeProps = Omit<CommonProps, 'color'> & BadgeVariants;

/**
 * Badge 컴포넌트
 *
 * @param {React.ReactNode} [props.children='text'] - 배지 내부 텍스트 (선택, 기본값: 'text')
 * @param {BadgeVariants['size']} [props.size='m'] - 배지 크기 (선택, 기본값: 'm')
 * @param {BadgeVariants['color']} [props.color='blue'] - 배지 색상 (선택, 기본값: 'blue')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - Container 컴포넌트로 전달될 기타 props
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export const Badge = forwardRef<HTMLElement, BadgeProps>(
  ({ children = 'text', size = 'm', color = 'blue', className, ...props }, ref) => {
    const badgeClass = badgeRecipe({ size, color });
    const textType = size === 's' ? 'caption' : size === 'm' ? 'footnote' : 'label';

    return (
      <Container
        as="div"
        ref={ref}
        className={clsx(badgeClass, className)}
        display="inline-block"
        {...props}
      >
        <Text as="span" textType={textType} color={`${color}500`}>
          {children}
        </Text>
      </Container>
    );
  },
);
