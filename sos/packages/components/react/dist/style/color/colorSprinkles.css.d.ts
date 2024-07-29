import { vars } from '@sos/style-tokens';
export declare const colorProperties: {
    conditions: {
        defaultCondition: "default";
        conditionNames: "default"[];
    };
    styles: {
        color: {
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        default: string;
                    };
                };
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        default: string;
                    };
                };
            };
        };
        backgroundColor: {
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        default: string;
                    };
                };
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        default: string;
                    };
                };
            };
        };
    };
};
export declare const colorSprinkles: ((props: {
    color?: string | number | {
        default?: string | number | undefined;
    } | undefined;
    backgroundColor?: string | number | {
        default?: string | number | undefined;
    } | undefined;
}) => string) & {
    properties: Set<"color" | "backgroundColor">;
};
export type PaletteColors = keyof typeof vars.color.$static.light.color | `opacityBlack${keyof typeof vars.color.$static.light.opacityBlack}` | `opacityWhite${keyof typeof vars.color.$static.light.opacityWhite}` | `blue${keyof typeof vars.color.$palette.blue}` | `green${keyof typeof vars.color.$palette.green}` | `pink${keyof typeof vars.color.$palette.pink}` | `orange${keyof typeof vars.color.$palette.orange}` | `gray${keyof typeof vars.color.$palette.gray}` | `coolGray${keyof typeof vars.color.$palette.coolGray}` | `blueGray${keyof typeof vars.color.$palette.blueGray}` | `background${Capitalize<keyof typeof vars.color.$palette.background>}` | `text${Capitalize<keyof typeof vars.color.$palette.text>}` | `ui${Capitalize<keyof typeof vars.color.$palette.ui>}`;
