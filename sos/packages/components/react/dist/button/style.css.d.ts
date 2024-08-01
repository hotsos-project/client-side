import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const buttonRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: string[];
        m: string[];
        l: string[];
    };
    variant: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    design: {
        fill: {};
        outline: string[];
    };
}>;
export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
