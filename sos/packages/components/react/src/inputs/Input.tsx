import { DefaultProps } from '../common/types';
import { commonStyle, divStateStyle, inputStyle, inputStateStyle, iconStyle, buttonStyle } from './input.css';

interface InputProps extends DefaultProps {
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
 */
export const Input: React.FC<InputProps> = ({ 
  state = 'warning', 
  showIcon = true, 
  showButton = true, 
  className, 
  ...props 
}) => {
  const commonClass = commonStyle;
  const divStateClass = divStateStyle[state];
  const inputStateClass = inputStateStyle[state];
  const iconClass = iconStyle;

  return (
    <div className={`${commonClass} ${divStateClass} ${className || ''}`} {...props}>
      {showIcon && <span className={`material-symbols-outlined input-icon ${iconClass}`}>search</span>}
      <input className={`${inputStyle} ${inputStateClass}`} type="text" placeholder="Placeholder" />
      {showButton && (
        <button className={buttonStyle}>
          <span className={'material-symbols-outlined'}>cancel</span>
        </button>
      )}
    </div>
  );
};
