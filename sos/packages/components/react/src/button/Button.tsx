import { DefaultProps } from '../common/types';
import {
  baseStyle,
  sizeStyle,
  stateStyle,
  mainTextStyle,
  subTextStyle,
} from './button.css';

interface ButtonProps extends DefaultProps{
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary' | 'tertiary';
  state: 'default' | 'hover' | 'disabled';
  design: 'fill' | 'outline';
  icon?: string;
  subText?: string;
  mainText?: string;
  isLoading?: boolean;
}

/**
 * Button 컴포넌트
 * 
 * @param {'s' | 'm' | 'l'} props.size - 버튼의 크기 (필수, 기본값: 'm')
 * @param {'primary' | 'secondary' | 'tertiary'} props.variant - 버튼의 변형 스타일 (필수, 기본값: 'primary')
 * @param {'default' | 'hover' | 'disabled'} props.state - 버튼의 상태 (필수, 기본값: 'default')
 * @param {'fill' | 'outline'} props.design - 버튼 디자인 스타일 (필수, 기본값: 'fill')
 * @param {string} [props.icon='add'] - 아이콘 이름 (선택, 기본값: 'add')
 * @param {string} [props.subText='sub'] - 서브 텍스트 (선택, 기본값: 'sub')
 * @param {string} [props.mainText='Main'] - 메인 텍스트 (선택, 기본값: 'Main')
 * @param {boolean} [props.isLoading=true] - 로딩 상태 표시 여부 (선택, 기본값: true)
 */
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
        `${variant}${design.charAt(0).toUpperCase() + design.slice(1)}` as keyof typeof stateStyle
      ];
  } else {
    const stateDesignKey =
      `${state}${design.charAt(0).toUpperCase() + design.slice(1)}` as keyof typeof stateStyle;
    stateClass = stateStyle[stateDesignKey];
  }

  return (
    <button className={`${baseClass} ${sizeClass} ${stateClass}`}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {subText && <span className={subTextStyle}>{subText}</span>}
      {mainText && <span className={mainTextStyle}>{mainText}</span>}
      {isLoading && <span className="material-symbols-outlined">refresh</span>}
    </button>
  );
};
