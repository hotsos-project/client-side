import { TypographyVariants } from './recipe.css';
interface TypographyProps extends TypographyVariants {
    children: React.ReactNode;
    className?: string;
}
export declare const Typography: React.FC<TypographyProps>;
export {};
