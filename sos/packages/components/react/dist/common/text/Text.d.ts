import { PaletteColors } from '../../style/color/colorSprinkles.css';
import { TypographyVariants } from '../../style/typography/typographyRecipe.css';
import { AsProps } from '../types';
interface TextProps extends TypographyVariants, AsProps {
    children: React.ReactNode;
    color?: PaletteColors;
    className?: string;
}
export declare const Text: React.FC<TextProps>;
export {};
