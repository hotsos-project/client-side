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

const textColorMap: Record<
  string,
  Record<string, { textColor: Palette; hovertextColor: Palette }>
> = {
  primary: {
    fill: { textColor: 'white', hovertextColor: 'white' },
    outline: { textColor: 'uiPrimaryNormal', hovertextColor: 'blue700' },
  },
  secondary: {
    fill: { textColor: 'white', hovertextColor: 'white' },
    outline: { textColor: 'textNormal', hovertextColor: 'textNormal' },
  },
  tertiary: {
    fill: { textColor: 'blueGray500', hovertextColor: 'blueGray500' },
    outline: { textColor: 'blueGray500', hovertextColor: 'blueGray500' },
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size,
      variant = 'primary',
      design = 'fill',
      icon,
      leftSubText,
      rightSubText,
      // mainText = 'Main Text',
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

    const { textColor, hovertextColor } = textColorMap[variant][design] || {
      textColor: 'uiPrimaryNormal',
      hovertextColor: 'uiPrimaryNormal',
    };

    return (
      <button
        ref={ref}
        className={clsx(buttonClass, className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ ...props.style }}
        {...props}
      >
        {icon && <Icon color={isHovered ? hovertextColor : textColor}>{icon}</Icon>}
        {leftSubText && (
          <Text textType="body1" color={isHovered ? hovertextColor : textColor}>
            {leftSubText}
          </Text>
        )}
        {children && (
          <Text textType="body1" textMode="bold" color={isHovered ? hovertextColor : textColor}>
            {children}
          </Text>
        )}
        {rightSubText && (
          <Text textType="body1" color={isHovered ? hovertextColor : textColor}>
            {rightSubText}
          </Text>
        )}
        {isLoading && <Icon color={isHovered ? hovertextColor : textColor}>{loadingSpinner}</Icon>}
      </button>
    );
  },
);
