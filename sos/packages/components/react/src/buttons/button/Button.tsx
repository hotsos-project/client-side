import clsx from 'clsx';
import { forwardRef } from 'react';
import { CommonProps } from '../../common/types';
import { buttonRecipe, ButtonVariants } from './style.css';
import { Icon } from '../../common/icon/Icon';
import { Text } from '../../common/text/Text';

type ButtonProps = {
  icon?: string;
  leftSubText?: string;
  rightSubText?: string;
  mainText?: string;
  isLoading?: boolean;
  loadingSpinner?: string;
};

type ButtonExtendedProps = ButtonProps & ButtonVariants & CommonProps;

/**
 * Button 컴포넌트
 *
 * @param {ButtonVariants['size']} [props.size='m'] - 버튼의 크기 (기본값: 'm')
 * @param {ButtonVariants['variant']} [props.variant='primary'] - 버튼의 변형 스타일 (기본값: 'primary')
 * @param {ButtonVariants['state']} [props.state='default'] - 버튼의 상태 (기본값: 'default')
 * @param {ButtonVariants['design']} [props.design='outline'] - 버튼 디자인 스타일 (기본값: 'outline')
 * @param {string} [props.icon] - 아이콘 이름 (선택)
 * @param {string} [props.leftSubText] - 좌측 서브 텍스트 (선택)
 * @param {string} [props.rightSubText] - 우측 서브 텍스트 (선택)
 * @param {string} [props.mainText] - 메인 텍스트 (선택)
 * @param {boolean} [props.isLoading=false] - 로딩 상태 표시 여부 (선택)
 * @param {string} [props.loadingSpinner='refresh'] - 로딩 스피너 아이콘 (선택, 기본값: 'refresh')
 * @param {React.Ref<HTMLButtonElement>} ref - 전달받은 ref
 */
export const Button = forwardRef<HTMLButtonElement, ButtonExtendedProps>(
  (
    {
      size = 'm',
      variant = 'primary',
      state = 'default',
      design = 'fill',
      icon,
      leftSubText,
      rightSubText,
      mainText,
      isLoading = false,
      loadingSpinner = 'refresh',
      className,
      ...props
    },
    ref,
  ) => {
    const buttonClass = buttonRecipe({
      size,
      variant,
      state: isLoading ? 'disabled' : state,
      design,
    });

    return (
      <button ref={ref} className={clsx(buttonClass, className)} {...props} disabled={isLoading}>
        {icon && <Icon>{icon}</Icon>}
        {leftSubText && <Text>{leftSubText}</Text>}
        {mainText && <Text>{mainText}</Text>}
        {rightSubText && <Text>{rightSubText}</Text>}
        {isLoading && <Icon>{loadingSpinner}</Icon>}
      </button>
    );
  },
);
