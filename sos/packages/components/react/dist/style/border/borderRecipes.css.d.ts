export declare const borderRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    borderType: {
        border: {
            borderColor: string;
            borderStyle: "solid";
            borderWidth: string;
        };
        borderTop: {
            borderTopColor: string;
            borderTopStyle: "solid";
            borderTopWidth: string;
        };
        borderBottom: {
            borderBottomColor: string;
            borderBottomStyle: "solid";
            borderBottomWidth: string;
        };
        borderLeft: {
            borderLeftColor: string;
            borderLeftStyle: "solid";
            borderLeftWidth: string;
        };
        borderRight: {
            borderRightColor: string;
            borderRightStyle: "solid";
            borderRightWidth: string;
        };
    };
}>;
export type BorderVariants = {
    borderType?: 'border' | 'borderBottom' | 'borderLeft' | 'borderRight' | 'borderTop';
};
