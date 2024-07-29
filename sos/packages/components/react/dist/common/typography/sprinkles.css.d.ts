export declare const typographySprinkles: ((props: {
    fontSize?: 22 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 20 | 60 | 40 | 34 | 28 | 24 | {
        default?: 22 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 20 | 60 | 40 | 34 | 28 | 24 | undefined;
        bold?: 22 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 20 | 60 | 40 | 34 | 28 | 24 | undefined;
        reading?: 22 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 20 | 60 | 40 | 34 | 28 | 24 | undefined;
    } | undefined;
    fontWeight?: 700 | 600 | 400 | {
        default?: 700 | 600 | 400 | undefined;
        bold?: 700 | 600 | 400 | undefined;
        reading?: 700 | 600 | 400 | undefined;
    } | undefined;
    lineHeight?: 22 | 16 | 18 | 19 | 20 | 34 | 28 | 24 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | {
        default?: 22 | 16 | 18 | 19 | 20 | 34 | 28 | 24 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | undefined;
        bold?: 22 | 16 | 18 | 19 | 20 | 34 | 28 | 24 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | undefined;
        reading?: 22 | 16 | 18 | 19 | 20 | 34 | 28 | 24 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | undefined;
    } | undefined;
}) => string) & {
    properties: Set<"fontSize" | "fontWeight" | "lineHeight">;
};
export type TypographyStyles = Parameters<typeof typographySprinkles>[0];
