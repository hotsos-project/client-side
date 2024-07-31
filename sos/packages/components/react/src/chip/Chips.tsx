import { CommonProps } from '../common/types';
import { baseStyle, sizeStyle, stateStyle } from './style.css';

interface ChipsProps extends CommonProps {
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary';
  state: 'default' | 'outline' | 'active' | 'disabled';
  content: string;
}

/**
 * Chips 컴포넌트
 *
 * @param {'s' | 'm' | 'l'} props.size - 칩의 크기 (필수, 기본값: 'm')
 * @param {'primary' | 'secondary'} props.variant - 칩의 변형 스타일 (필수, 기본값: 'primary')
 * @param {'default' | 'outline' | 'active' | 'disabled'} props.state - 칩의 상태 (필수, 기본값: 'default')
 * @param {string} props.content - 칩에 표시될 텍스트 내용 (필수, 기본값: 'Label')
 */
export const Chips: React.FC<ChipsProps> = ({
  size = 'm',
  variant = 'primary',
  state = 'default',
  content = 'Label',
}) => {
  const baseClass = baseStyle;
  const sizeClass = sizeStyle[size];

  let stateClass = '';

  if (state === 'active') {
    stateClass = variant === 'primary' ? stateStyle.activePrimary : stateStyle.activeSecondary;
  } else if (state === 'outline') {
    stateClass = variant === 'primary' ? stateStyle.outlinePrimary : stateStyle.outlineSecondary;
  } else {
    stateClass = stateStyle[state];
  }

  return <div className={`${baseClass} ${sizeClass} ${stateClass}`}>{content}</div>;
};
