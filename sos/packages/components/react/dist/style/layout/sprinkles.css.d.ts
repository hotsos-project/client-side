export declare const layoutSprinkles: ((props: {
    display?: "flex" | "inline" | "none" | "block" | "inline-block" | undefined;
    flexDirection?: "column" | "row" | undefined;
    justifyContent?: "center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start" | undefined;
    alignItems?: "center" | "stretch" | "flex-end" | "flex-start" | undefined;
    width?: "100%" | "100vw" | "100dvw" | undefined;
    height?: "100%" | "100vh" | "100dvh" | undefined;
}) => string) & {
    properties: Set<"height" | "width" | "alignItems" | "display" | "flexDirection" | "justifyContent">;
};
export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0];
