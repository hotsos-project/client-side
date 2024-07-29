import { baseStyle, sizeStyle, stateStyle } from './chips.css';

interface ChipsProps {
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary';
  state: 'default' | 'outline' | 'active' | 'disabled';
}

export const Chips: React.FC<ChipsProps> = ({
  size = 's',
  variant = 'primary',
  state = 'default',
}) => {
  const baseClass = baseStyle;
  const sizeClass = sizeStyle[size];

  let stateClass = '';

  if (state === 'active') {
    stateClass =
      variant === 'primary'
        ? stateStyle.activePrimary
        : stateStyle.activeSecondary;
  } else if (state === 'outline') {
    stateClass =
      variant === 'primary'
        ? stateStyle.outlinePrimary
        : stateStyle.outlineSecondary;
  } else {
    stateClass = stateStyle[state];
  }

  return <div className={`${baseClass} ${sizeClass} ${stateClass}`}>Label</div>;
};
