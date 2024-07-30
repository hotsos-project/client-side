import { ElementType } from 'react';
import { ColorSprinkles } from '../style/color/colorSprinkles.css';
import { TypographyVariants } from '../style/typography/typographyRecipes.css';
import { SpacingSprinkles } from '../style/spacing/spacingSprinkles.css';
import { LayoutSprinkles } from '../style/layout/layoutSprinkles.css';
import { BorderSprinkles } from '../style/border/borderSprinkles.css';
import { BorderVariants } from '../style/border/borderRecipes.css';
import { ShadowSprinkles } from '../style/shadow/shadowSprinkles.css';
export type AsProps = {
    as?: ElementType;
};
export interface DefaultProps extends AsProps, ColorSprinkles, TypographyVariants, SpacingSprinkles, LayoutSprinkles, BorderSprinkles, BorderVariants, ShadowSprinkles {
    children?: React.ReactNode;
    width?: number;
    height?: number;
    className?: string;
}
