import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const buttonRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: (string | {
            fontSize: string;
            lineHeight: string;
        })[];
        m: (string | {
            fontSize: string;
            lineHeight: string;
        })[];
        l: (string | {
            fontSize: string;
            lineHeight: string;
        })[];
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
    state: {
        default: {};
        hover: {};
        active: {};
        disabled: string;
        cursor: string;
    };
}>;
export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
