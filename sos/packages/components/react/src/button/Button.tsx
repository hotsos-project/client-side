import clsx from 'clsx';
import { forwardRef } from 'react';
import { CommonProps } from '../common/types';
import { buttonRecipe, ButtonVariants } from './style.css';
import { Icon } from '../common/icon/Icon';
import { Text } from '../common/text/Text';

interface ButtonProps extends CommonProps, NonNullable<ButtonVariants> {
  icon?: string;
  leftSubText?: string | number;
  rightSubText?: string | number;
  mainText?: string;
  isLoading?: boolean;
  loadingSpinner?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      design,
      icon,
      leftSubText,
      rightSubText,
      mainText = 'Main Text',
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

    return (
      <button ref={ref} className={clsx(buttonClass, className)} {...props}>
        {icon && <Icon>{icon}</Icon>}
        {leftSubText && <Text textType="body1">{leftSubText}</Text>}
        {mainText && (
          <Text textType="body1" textMode="bold">
            {mainText}
          </Text>
        )}
        {rightSubText && <Text textType="body1">{rightSubText}</Text>}

        {isLoading && <Icon>{loadingSpinner}</Icon>}
      </button>
    );
  },
);
