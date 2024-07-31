import { forwardRef, ReactNode } from 'react';
import { colorSprinkles, Palette } from '../../style/color/colorSprinkles.css';
import clsx from 'clsx';

interface IconProps {
  children: ReactNode;
  color?: Palette;
  size?: number;
  className?: string;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ children, color = 'textNormal', size, className, ...props }, ref) => {
    const colorClass = colorSprinkles({ color });

    const iconStyle = {
      display: 'inline-block',
      ...(size && { fontSize: `${size}px` }),
    };

    return (
      <span
        ref={ref}
        className={clsx('material-symbols-outlined', colorClass, className)}
        style={iconStyle}
        {...props}
      >
        {children}
      </span>
    );
  },
);
