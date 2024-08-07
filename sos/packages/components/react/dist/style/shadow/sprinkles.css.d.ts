export declare const shadowSprinkles: ((props: {
    boxShadow?: "xs" | "s" | "m" | "l" | "elevatedTop" | undefined;
}) => string) & {
    properties: Set<"boxShadow">;
};
export type ShadowSprinkles = Parameters<typeof shadowSprinkles>[0];
