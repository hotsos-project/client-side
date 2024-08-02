'use client';

import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { CommonProps } from '../common/types';
import { Palette } from '../style/color/sprinkles.css';
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
    const [isHovered, setIsHovered] = useState(false);

    const buttonClass = buttonRecipe({
      size,
      variant,
      design,
    });

    let iconColor: Palette = 'uiPrimaryNormal';
    let hoverIconColor: Palette = 'uiPrimaryNormal';

    if (variant === 'primary') {
      if (design === 'fill') {
        iconColor = 'white';
        hoverIconColor = 'white';
      } else if (design === 'outline') {
        iconColor = 'uiPrimaryNormal';
        hoverIconColor = 'blue700';
      }
    } else if (variant === 'secondary') {
      if (design === 'fill') {
        iconColor = 'white';
        hoverIconColor = 'white';
      } else if (design === 'outline') {
        iconColor = 'textNormal';
        hoverIconColor = 'textNormal';
      }
    } else if (variant === 'tertiary') {
      iconColor = 'blueGray500';
      hoverIconColor = 'blueGray500';
    }

    return (
      <button
        ref={ref}
        className={clsx(buttonClass, className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {icon && <Icon color={isHovered ? hoverIconColor : iconColor}>{icon}</Icon>}
        {leftSubText && <Text textType="body1">{leftSubText}</Text>}
        {mainText && (
          <Text textType="body1" textMode="bold">
            {mainText}
          </Text>
        )}
        {rightSubText && <Text textType="body1">{rightSubText}</Text>}
        {isLoading && <Icon color={isHovered ? hoverIconColor : iconColor}>{loadingSpinner}</Icon>}
      </button>
    );
  },
);
