import { commonStyle, divStateStyle, inputStyle, inputStateStyle, iconStyle, buttonStyle } from './input.css';

interface InputProps {
  state: 'default' | 'highlight' | 'warning' | 'disabled';
  showIcon?: boolean;
  showButton?: boolean;
}

export const Input: React.FC<InputProps> = ({ state = 'warning', showIcon = true, showButton = true }) => {
  const commonClass = commonStyle;
  const divStateClass = divStateStyle[state];
  const inputStateClass = inputStateStyle[state];
  const iconClass = iconStyle;

  return (
    <div className={`${commonClass} ${divStateClass}`}>
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
