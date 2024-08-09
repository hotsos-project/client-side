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
  iconColor?: Palette;
  leftSubText?: string | number;
  rightSubText?: string | number;
  mainText?: string;
  isLoading?: boolean;
  loadingSpinner?: string;
  disabled?: boolean; // Add disabled prop
  type?: 'button' | 'submit' | 'reset'; // Add type prop for button types
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
      iconColor,
      leftSubText,
      rightSubText,
      isLoading = false,
      loadingSpinner = 'refresh',
      disabled = false,
      type = 'button', // Set default type to 'button'
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
        type={type} // Apply type prop to the button element
        className={clsx(buttonClass, className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ ...props.style }}
        disabled={disabled} // Apply disabled prop to the button element
        {...props}
      >
        {icon && (
          <Icon color={iconColor || (isHovered && !disabled ? hovertextColor : textColor)}>
            {icon}
          </Icon>
        )}
        {leftSubText && (
          <Text textType="body1" color={isHovered && !disabled ? hovertextColor : textColor}>
            {leftSubText}
          </Text>
        )}
        {children && (
          <Text
            textType="body1"
            textMode="bold"
            color={isHovered && !disabled ? hovertextColor : textColor}
          >
            {children}
          </Text>
        )}
        {rightSubText && (
          <Text textType="body1" color={isHovered && !disabled ? hovertextColor : textColor}>
            {rightSubText}
          </Text>
        )}
        {isLoading && (
          <Icon color={iconColor || (isHovered && !disabled ? hovertextColor : textColor)}>
            {loadingSpinner}
          </Icon>
        )}
      </button>
    );
  },
);
