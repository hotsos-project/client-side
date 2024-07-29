export declare const typographyRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    type: {
        display1: string;
        display2: string;
        title1: string;
        title2: string;
        title3: string;
        heading1: string;
        heading2: string;
        headline: string;
        body1: string;
        body2: string;
        body3: string;
        label: string;
        footnote: string;
        caption: string;
    };
    weight: {
        regular: string;
        bold: string;
        extraBold: string;
    };
    mode: {
        default: {};
        reading: {};
    };
}>;
export type TypographyVariants = Parameters<typeof typographyRecipe>[0];
