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

interface InputProps extends CommonProps {
  state: 'default' | 'highlight' | 'warning' | 'disabled';
  placeholder: string;
  type?: string;
  showIcon?: boolean;
  showButton?: boolean;
  showPasswordToggle?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 컴포넌트
 *
 * @param {'default' | 'highlight' | 'warning' | 'disabled'} props.state - 인풋의 상태 (필수)
 * @param {boolean} [props.showIcon=true] - 아이콘 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showButton=true] - 버튼 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showPasswordToggle=false] - 비밀번호 토글 버튼 표시 여부 (선택, 기본값: false)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {string} props.placeholder - 인풋의 플레이스홀더 (필수)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLInputElement>} ref - 전달받은 ref
 */
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

    const commonClass = commonStyle;
    const divStateClass = divStateStyle[state];
    const inputStateClass = inputStateStyle[state];
    const iconClass = state === 'disabled' ? disabledIconStyle : iconStyle;

    return (
      <div className={`${commonClass} ${divStateClass} ${className || ''}`} {...props}>
        {showIcon && <Icon className={iconClass}>{'search'}</Icon>}
        <input
          ref={ref}
          className={`${inputStyle} ${inputStateClass}`}
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleInputChange}
          disabled={state === 'disabled'}
        />
        {showButton && internalValue && state !== 'disabled' && type !== 'password' && (
          <button type="button" className={buttonStyle} onClick={handleButtonClick}>
            <Icon color="gray200">{'cancel'}</Icon>
          </button>
        )}
        {showPasswordToggle && (
          <button type="button" className={buttonStyle} onClick={handlePasswordToggle}>
            <Icon color={iconColor}>{'remove_red_eye'}</Icon>
          </button>
        )}
      </div>
    );
  },
);
