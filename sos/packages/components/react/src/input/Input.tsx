import React, { forwardRef, useState, useEffect } from 'react';
import { CommonProps } from '../common/types';
import {
  commonStyle,
  divStateStyle,
  inputStyle,
  inputStateStyle,
  iconStyle,
  disabledIconStyle,
  buttonStyle,
} from './style.css';
import { Icon } from '../common/icon/Icon';
import { Palette } from '../style/color/sprinkles.css';
import { Container } from '../common/container/Container';

interface InputProps extends CommonProps {
  state: 'default' | 'highlight' | 'warning' | 'disabled';
  placeholder: string;
  type?: string;
  showIcon?: boolean;
  showButton?: boolean;
  showPasswordToggle?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = 'default',
      showIcon = true,
      showButton = true,
      showPasswordToggle = false,
      type,
      className,
      placeholder,
      value,
      onChange,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(value || '');
    const [inputType, setInputType] = useState(type);
    const [iconColor, setIconColor] = useState<Palette>('gray200');

    useEffect(() => {
      setInternalValue(value || '');
    }, [value]);

    useEffect(() => {
      setInputType(type);
      setIconColor(type === 'password' ? 'gray200' : 'gray600');
    }, [type]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    };

    const handleButtonClick = () => {
      setInternalValue('');
      if (onChange) {
        onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const handlePasswordToggle = () => {
      if (inputType === 'password') {
        setInputType('text');
        setIconColor('gray600');
      } else {
        setInputType('password');
        setIconColor('gray200');
      }
    };

    const divStateClass = divStateStyle[state];
    const inputStateClass = inputStateStyle[state];
    const iconClass = disabled ? disabledIconStyle : iconStyle;

    return (
      <Container
        display="flex"
        justifyContent="space-between"
        width={'100%'}
        paddingLeft={12}
        paddingRight={18}
        borderRadius="base"
        gap={8}
        style={{ height: '3rem' }}
        className={`${divStateClass} ${className || ''}`}
        {...props}
      >
        {showIcon && <Icon className={iconClass}>{'search'}</Icon>}
        <input
          ref={ref}
          className={`${inputStyle} ${inputStateClass}`}
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {showButton && internalValue && !disabled && type !== 'password' && (
          <button type="button" className={buttonStyle} onClick={handleButtonClick}>
            <Icon color="gray200">{'cancel'}</Icon>
          </button>
        )}
        {showPasswordToggle && (
          <button type="button" className={buttonStyle} onClick={handlePasswordToggle}>
            <Icon color={iconColor}>{'remove_red_eye'}</Icon>
          </button>
        )}
      </Container>
    );
  },
);
