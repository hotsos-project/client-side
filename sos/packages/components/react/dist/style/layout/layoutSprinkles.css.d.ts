export declare const layoutSprinkles: ((props: {
    display?: "none" | "block" | "inline" | "flex" | undefined;
    flexDirection?: "column" | "row" | undefined;
    justifyContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
}) => string) & {
    properties: Set<"alignItems" | "display" | "flexDirection" | "justifyContent">;
};
export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0];
