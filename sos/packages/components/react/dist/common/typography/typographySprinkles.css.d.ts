export declare const typographySprinkles: ((props: {
    fontSize?: 60 | 40 | 34 | 28 | 24 | 22 | 20 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | {
        default?: 60 | 40 | 34 | 28 | 24 | 22 | 20 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | undefined;
        bold?: 60 | 40 | 34 | 28 | 24 | 22 | 20 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | undefined;
        reading?: 60 | 40 | 34 | 28 | 24 | 22 | 20 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | undefined;
    } | undefined;
    fontWeight?: 700 | 600 | 400 | {
        default?: 700 | 600 | 400 | undefined;
        bold?: 700 | 600 | 400 | undefined;
        reading?: 700 | 600 | 400 | undefined;
    } | undefined;
    lineHeight?: 34 | 28 | 24 | 22 | 20 | 18 | 16 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | 19 | {
        default?: 34 | 28 | 24 | 22 | 20 | 18 | 16 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | 19 | undefined;
        bold?: 34 | 28 | 24 | 22 | 20 | 18 | 16 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | 19 | undefined;
        reading?: 34 | 28 | 24 | 22 | 20 | 18 | 16 | 72 | 48 | 41 | 30 | 26 | 25 | 23 | 21 | 19 | undefined;
    } | undefined;
}) => string) & {
    properties: Set<"fontSize" | "fontWeight" | "lineHeight">;
};
export type TypographyStyles = Parameters<typeof typographySprinkles>[0];
