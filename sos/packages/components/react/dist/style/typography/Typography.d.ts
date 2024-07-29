import { PaletteColors } from '../color/colorSprinkles.css';
import { TypographyVariants } from './typographyRecipe.css';
interface TypographyProps extends TypographyVariants {
    children: React.ReactNode;
    color?: PaletteColors;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}
export declare const Typography: React.FC<TypographyProps>;
export {};
