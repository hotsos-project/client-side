import { ReactNode } from 'react';
import { Palette } from '../../style/color/colorSprinkles.css';
interface IconProps {
    children: ReactNode;
    color?: Palette;
    size?: number;
    className?: string;
}
export declare const Icon: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<HTMLElement>>;
export {};
