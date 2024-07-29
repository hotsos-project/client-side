import { PaletteColors } from '../color/colorSprinkles.css';
import { TypographyVariants } from './typographyRecipe.css';
import { AsProps } from '../../common/types';
interface TextProps extends TypographyVariants, AsProps {
    children: React.ReactNode;
    color?: PaletteColors;
    className?: string;
}
export declare const Text: React.FC<TextProps>;
export {};
