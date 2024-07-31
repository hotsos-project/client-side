import { ElementType } from 'react';
import { LayoutSprinkles } from '../style/layout/layoutSprinkles.css';
import { SpacingSprinkles } from '../style/spacing/spacingSprinkles.css';
import { ColorSprinkles } from '../style/color/colorSprinkles.css';
import { TypographyVariants } from '../style/typography/typographyRecipes.css';
import { BorderSprinkles } from '../style/border/borderSprinkles.css';
import { BorderVariants } from '../style/border/borderRecipes.css';
import { ShadowSprinkles } from '../style/shadow/shadowSprinkles.css';
export type AsProps = {
    as?: ElementType;
};
export interface CommonProps extends AsProps, LayoutSprinkles, SpacingSprinkles, ColorSprinkles, TypographyVariants, BorderSprinkles, BorderVariants, ShadowSprinkles {
    children?: React.ReactNode;
    width?: number | '100%' | '100vw' | '100dvw';
    height?: number | '100%' | '100vh' | '100dvh';
    className?: string;
}
