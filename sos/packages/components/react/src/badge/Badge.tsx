import { commonStyle, sizeStyle, colorStyle } from './badge.css';

interface BadgeProps {
  size?: 's' | 'm' | 'l';
  color: 'blue' | 'pink' | 'orange' | 'green';
}

export const Badge: React.FC<BadgeProps> = ({ size = 'l', color = 'blue' }) => {
  const sizeClass = sizeStyle[size];
  const colorClass = colorStyle[color] || 'blue';
  return (
    <div className={`${commonStyle} ${sizeClass}  ${colorClass}`}>Badge</div>
  );
};
