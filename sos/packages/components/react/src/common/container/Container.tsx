import { forwardRef } from 'react';
import { colorSprinkles } from '../../style/color/colorSprinkles.css';
import { AsProps, DefaultProps } from '../types';

interface ContainerProps extends AsProps, DefaultProps {
  children: React.ReactNode;
}

export const Container = forwardRef<HTMLElement, ContainerProps>(({ children, as: Component = 'div', backgroundColor, className, ...props }, ref) => {
  const backgroundColorClass = backgroundColor ? colorSprinkles({ backgroundColor }) : '';
  return (
    <Component ref={ref} className={`${backgroundColorClass} ${className || ''}`} {...props}>
      {children}
    </Component>
  );
});
