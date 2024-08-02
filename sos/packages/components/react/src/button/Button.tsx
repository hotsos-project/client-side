import clsx from 'clsx';
import { forwardRef } from 'react';
import { CommonProps } from '../common/types';
import { buttonRecipe, ButtonVariants } from './style.css';
import { Icon } from '../common/icon/Icon';
import { Text } from '../common/text/Text';



interface ButtonProps extends CommonProps, NonNullable<ButtonVariants> {

type Palette = 'white' | 'uiPrimaryNormal' | 'blueGray500' | 'textNormal';

type ButtonProps = {
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
        {leftSubText && (
          <Text textType="body1" color={iconColor}>
            {leftSubText}
          </Text>
        )}
        {mainText && (
          <Text textType="body1" textMode="bold" color={iconColor}>
            {mainText}
          </Text>
        )}
        {rightSubText && (
          <Text textType="body1" color={iconColor}>
            {rightSubText}
          </Text>
        )}

        
        {isLoading && <Icon color={iconColor}>{loadingSpinner}</Icon>}
      </button>
    );
  },
);
