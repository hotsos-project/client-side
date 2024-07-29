import {
  baseStyle,
  sizeStyle,
  stateStyle,
  mainTextStyle,
  subTextStyle,
} from './button.css';

interface ButtonProps {
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary' | 'tertiary';
  state: 'default' | 'hover' | 'disabled';
  design: 'fill' | 'outline';
  icon?: string;
  subText?: string;
  mainText: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'm',
  variant = 'primary',
  state = 'default',
  design = 'fill',
  icon = 'add',
  subText = 'sub',
  mainText = 'Main',
  isLoading = true,
}) => {
  const baseClass = baseStyle;
  const sizeClass = sizeStyle[size];
  let stateClass = '';

  if (variant === 'secondary' || variant === 'tertiary') {
    stateClass =
      stateStyle[
        `${variant}${design.charAt(0).toUpperCase() + design.slice(1)}`
      ];
  } else {
    const stateDesignKey = `${state}${design.charAt(0).toUpperCase() + design.slice(1)}`;
    stateClass = stateStyle[stateDesignKey];
  }

  return (
    <button className={`${baseClass} ${sizeClass} ${stateClass}`}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {subText && <span className={subTextStyle}>{subText}</span>}
      <span className={mainTextStyle}>{mainText}</span>
      {isLoading && <span className="material-symbols-outlined">refresh</span>}
    </button>
  );
};
