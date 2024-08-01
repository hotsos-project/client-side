import clsx from 'clsx';
import { forwardRef } from 'react';
import { CommonProps } from '../common/types';
import { buttonRecipe, ButtonVariants } from './style.css';
import { Icon } from '../common/icon/Icon';
import { Text } from '../common/text/Text';

// Palette 타입 정의
type Palette = 'white' | 'uiPrimaryNormal' | 'blueGray500' | 'textNormal';

type ButtonProps = {
  icon?: string;
  leftSubText?: string | number;
  rightSubText?: string | number;
  mainText?: string;
  isLoading?: boolean;
  loadingSpinner?: string;
};

type ButtonExtendedProps = ButtonProps & ButtonVariants & CommonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonExtendedProps>(
  (
    {
      size,
      variant,
      design,
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
      design,
    });

    let iconColor: Palette | undefined;
    if (variant === 'primary') {
      if (design === 'fill') {
        iconColor = 'white';
      } else if (design === 'outline') {
        iconColor = 'uiPrimaryNormal';
      }
    } else if (variant === 'secondary') {
      if (design === 'fill') {
        iconColor = 'white';
      } else if (design === 'outline') {
        iconColor = 'textNormal';
      }
    } else if (variant === 'tertiary') {
      iconColor = 'blueGray500';
    }

    return (
      <button ref={ref} className={clsx(buttonClass, className)} {...props}>
        {icon && <Icon color={iconColor}>{icon}</Icon>}
        {leftSubText && <Text textType="body1">{leftSubText}</Text>}
        {mainText && (
          <Text textType="body1" textMode="bold">
            {mainText}
          </Text>
        )}
        {rightSubText && <Text textType="body1">{rightSubText}</Text>}
        {isLoading && <Icon color={iconColor}>{loadingSpinner}</Icon>}
      </button>
    );
  },
);
