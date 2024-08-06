import React, { forwardRef, useState } from 'react';
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

interface InputProps extends CommonProps {
  state: 'default' | 'highlight' | 'warning' | 'disabled';
  showIcon?: boolean;
  showButton?: boolean;
}

/**
 * Input 컴포넌트
 *
 * @param {'default' | 'highlight' | 'warning' | 'disabled'} props.state - 인풋의 상태 (필수)
 * @param {boolean} [props.showIcon=true] - 아이콘 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showButton=true] - 버튼 표시 여부 (선택, 기본값: true)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLInputElement>} ref - 전달받은 ref
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ state = 'default', showIcon = true, showButton = true, className, ...props }, ref) => {
    const [value, setValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const handleButtonClick = () => {
      setValue('');
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
          type="text"
          placeholder="Placeholder"
          value={value}
          onChange={handleInputChange}
          disabled={state === 'disabled'}
        />
        {showButton && value && state !== 'disabled' && (
          <button className={buttonStyle} onClick={handleButtonClick}>
            <Icon color="gray200">{'cancel'}</Icon>
          </button>
        )}
      </div>
    );
  },
);
