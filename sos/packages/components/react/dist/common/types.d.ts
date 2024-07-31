import { ElementType } from 'react';
import { LayoutSprinkles } from '../style/layout/sprinkles.css';
import { SpacingSprinkles } from '../style/spacing/sprinkles.css';
import { ColorSprinkles } from '../style/color/sprinkles.css';
import { TypographyVariants } from '../style/typography/recipes.css';
import { BorderSprinkles } from '../style/border/sprinkles.css';
import { BorderVariants } from '../style/border/recipes.css';
import { ShadowSprinkles } from '../style/shadow/sprinkles.css';
export type AsProps = {
    as?: ElementType;
};
export interface CommonProps extends AsProps, LayoutSprinkles, SpacingSprinkles, ColorSprinkles, TypographyVariants, BorderSprinkles, BorderVariants, ShadowSprinkles {
    children?: React.ReactNode;
    width?: number | '100%' | '100vw' | '100dvw';
    height?: number | '100%' | '100vh' | '100dvh';
    className?: string;
}
