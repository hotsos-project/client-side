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
        semiBold: string;
        bold: string;
    };
    mode: {
        default: {};
        reading: {};
        bold: {};
    };
}>;
export type TypographyVariants = {
    type?: 'display1' | 'display2' | 'title1' | 'title2' | 'title3' | 'heading1' | 'heading2' | 'headline' | 'body1' | 'body2' | 'body3' | 'label' | 'footnote' | 'caption';
    weight?: 'regular' | 'semiBold' | 'bold';
    mode?: 'default' | 'reading' | 'bold';
};
