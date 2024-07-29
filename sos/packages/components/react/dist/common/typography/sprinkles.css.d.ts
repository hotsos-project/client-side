export declare const typographySprinkles: ((props: {
    fontSize?: 16 | 12 | 14 | 13 | 15 | 17 | 18 | 20 | 22 | 24 | 60 | 40 | 34 | 28 | {
        default?: 16 | 12 | 14 | 13 | 15 | 17 | 18 | 20 | 22 | 24 | 60 | 40 | 34 | 28 | undefined;
        bold?: 16 | 12 | 14 | 13 | 15 | 17 | 18 | 20 | 22 | 24 | 60 | 40 | 34 | 28 | undefined;
        reading?: 16 | 12 | 14 | 13 | 15 | 17 | 18 | 20 | 22 | 24 | 60 | 40 | 34 | 28 | undefined;
    } | undefined;
    fontWeight?: 600 | 700 | 400 | {
        default?: 600 | 700 | 400 | undefined;
        bold?: 600 | 700 | 400 | undefined;
        reading?: 600 | 700 | 400 | undefined;
    } | undefined;
    lineHeight?: 16 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 34 | 28 | 72 | 48 | 41 | 30 | 26 | {
        default?: 16 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 34 | 28 | 72 | 48 | 41 | 30 | 26 | undefined;
        bold?: 16 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 34 | 28 | 72 | 48 | 41 | 30 | 26 | undefined;
        reading?: 16 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 34 | 28 | 72 | 48 | 41 | 30 | 26 | undefined;
    } | undefined;
}) => string) & {
    properties: Set<"fontSize" | "fontWeight" | "lineHeight">;
};
export type TypographyStyles = Parameters<typeof typographySprinkles>[0];
