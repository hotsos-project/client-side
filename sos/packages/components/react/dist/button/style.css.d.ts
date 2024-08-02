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
        fill: (string | {
            selectors: {
                '&:hover': {
                    backgroundColor: string;
                };
                '&:disabled': {
                    backgroundColor: string;
                    cursor: "not-allowed";
                    opacity: number;
                };
            };
        })[];
        outline: (string | {
            selectors: {
                '&:hover': {
                    color: string;
                    border: `0.0625rem solid ${string}`;
                };
                '&:disabled': {
                    borderColor: string;
                    color: string;
                    cursor: "not-allowed";
                    opacity: number;
                };
            };
        })[];
    };
}>;
export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
