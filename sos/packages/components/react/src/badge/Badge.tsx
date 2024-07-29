import { commonStyle, sizeStyle, colorStyle } from './badge.css';

type Color = {
  color: 'blue' | 'pink' | 'ornage' | 'green';
};

export const Badge: React.FC<Color> = ({ size = 'l', color = 'blue' }) => {
  const sizeClass = sizeStyle[size];
  const colorClass = colorStyle[color] || 'blue';
  return (
    <div className={`${commonStyle} ${sizeClass}  ${colorClass}`}>Badge</div>
  );
};
