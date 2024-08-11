import { Palette } from '../../src/style/color/sprinkles.css';
export declare const chipsStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        s: {
            height: "1.125rem";
            padding: `${string} ${string}`;
        };
        m: {
            height: "1.1875rem";
            padding: `${string} ${string}`;
        };
        l: {
            height: "1.25rem";
            padding: `${string} ${string}`;
        };
    };
    state: {
        default: {};
        outline: {};
        active: {};
        disabled: {
            color: string;
            backgroundColor: string;
        };
    };
    variant: {
        primary: {};
        secondary: {};
    };
}>;
export declare const getTextColor: ({ state, variant, }: {
    state: "default" | "outline" | "active" | "disabled";
    variant: "primary" | "secondary";
}) => Palette;
