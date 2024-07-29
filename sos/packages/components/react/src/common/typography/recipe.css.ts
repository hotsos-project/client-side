// typographyRecipe.css.ts
import { recipe } from '@vanilla-extract/recipes';
import { typographySprinkles } from './sprinkles.css';

export const typographyRecipe = recipe({
  base: typographySprinkles({ fontSize: 16, fontWeight: 400, lineHeight: 20 }),

  variants: {
    type: {
      display1: typographySprinkles({ fontSize: 60, lineHeight: 72 }),
      display2: typographySprinkles({ fontSize: 40, lineHeight: 48 }),
      title1: typographySprinkles({ fontSize: 34, lineHeight: 41 }),
      title2: typographySprinkles({ fontSize: 28, lineHeight: 34 }),
      title3: typographySprinkles({ fontSize: 24, lineHeight: 30 }),
      heading1: typographySprinkles({ fontSize: 22, lineHeight: 28 }),
      heading2: typographySprinkles({ fontSize: 20, lineHeight: 25 }),
      headline: typographySprinkles({ fontSize: 18, lineHeight: 23 }),
      body1: typographySprinkles({ fontSize: 17, lineHeight: 22 }),
      body2: typographySprinkles({ fontSize: 16, lineHeight: 21 }),
      body3: typographySprinkles({ fontSize: 15, lineHeight: 20 }),
      label: typographySprinkles({ fontSize: 14, lineHeight: 19 }),
      footnote: typographySprinkles({ fontSize: 13, lineHeight: 18 }),
      caption: typographySprinkles({ fontSize: 12, lineHeight: 16 }),
    },
    weight: {
      regular: typographySprinkles({ fontWeight: 400 }),
      bold: typographySprinkles({ fontWeight: 600 }),
      extraBold: typographySprinkles({ fontWeight: 700 }),
    },
    mode: {
      default: {},
      reading: {},
    },
  },

  compoundVariants: [
    {
      variants: { type: 'body1', mode: 'reading' },
      style: typographySprinkles({ lineHeight: 28 }),
    },
    {
      variants: { type: 'body2', mode: 'reading' },
      style: typographySprinkles({ lineHeight: 26 }),
    },
    {
      variants: { type: 'body3', mode: 'reading' },
      style: typographySprinkles({ lineHeight: 24 }),
    },
    {
      variants: { type: 'label', mode: 'reading' },
      style: typographySprinkles({ lineHeight: 22 }),
    },
    {
      variants: { type: 'display1', weight: 'extraBold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'display2', weight: 'extraBold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'title1', weight: 'extraBold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'title2', weight: 'extraBold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'title3', weight: 'extraBold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
  ],
});

export type TypographyVariants = {
  type?:
    | 'display1'
    | 'display2'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'heading1'
    | 'heading2'
    | 'headline'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'label'
    | 'footnote'
    | 'caption';
  weight?: 'regular' | 'bold' | 'extraBold';
  mode?: 'default' | 'reading';
};
