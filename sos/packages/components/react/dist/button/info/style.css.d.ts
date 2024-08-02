import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const infoButtonRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        default: string;
        danger: string;
        warning: string;
    };
}>;
export type InfoButtonVariants = RecipeVariants<typeof infoButtonRecipe>;
