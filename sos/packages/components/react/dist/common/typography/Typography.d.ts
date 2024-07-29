import { PaletteColors } from '../color/sprinkles.css';
import { TypographyVariants } from './recipe.css';
interface TypographyProps extends TypographyVariants {
    children: React.ReactNode;
    color?: PaletteColors;
    className?: string;
}
export declare const Typography: React.FC<TypographyProps>;
export {};
