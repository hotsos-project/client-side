import { PaletteColors } from '../style/color/colorSprinkles.css';
export interface AsProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface DefaultProps {
    backgroundColor?: PaletteColors;
    color?: PaletteColors;
    className?: string;
}
