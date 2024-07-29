import { recipe } from '@vanilla-extract/recipes';
import { typographySprinkles } from './typographySprinkles.css';

export const typographyRecipe = recipe({
  base: {},

  variants: {
    type: {
      display1: typographySprinkles({
        fontSize: 60,
        lineHeight: 72,
        fontWeight: 400,
      }),
      display2: typographySprinkles({
        fontSize: 40,
        lineHeight: 48,
        fontWeight: 400,
      }),
      title1: typographySprinkles({
        fontSize: 34,
        lineHeight: 41,
        fontWeight: 400,
      }),
      title2: typographySprinkles({
        fontSize: 28,
        lineHeight: 34,
        fontWeight: 400,
      }),
      title3: typographySprinkles({
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 400,
      }),
      heading1: typographySprinkles({
        fontSize: 22,
        lineHeight: 28,
        fontWeight: 400,
      }),
      heading2: typographySprinkles({
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 400,
      }),
      headline: typographySprinkles({
        fontSize: 18,
        lineHeight: 23,
        fontWeight: 400,
      }),
      body1: typographySprinkles({
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 400,
      }),
      body2: typographySprinkles({
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 400,
      }),
      body3: typographySprinkles({
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 400,
      }),
      label: typographySprinkles({
        fontSize: 14,
        lineHeight: 19,
        fontWeight: 400,
      }),
      footnote: typographySprinkles({
        fontSize: 13,
        lineHeight: 18,
        fontWeight: 400,
      }),
      caption: typographySprinkles({
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 400,
      }),
    },
    weight: {
      regular: typographySprinkles({ fontWeight: 400 }),
      semiBold: typographySprinkles({ fontWeight: 600 }),
      bold: typographySprinkles({ fontWeight: 700 }),
    },
    mode: {
      default: {},
      reading: {},
      bold: {},
    },
  },

  compoundVariants: [
    // Reading mode variants
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
    // Bold mode variants
    {
      variants: { type: 'display1', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'display2', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'title1', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'title2', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'title3', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 700 }),
    },
    {
      variants: { type: 'body1', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'body2', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'body3', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'caption', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'footnote', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'heading1', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'heading2', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'headline', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
    },
    {
      variants: { type: 'label', mode: 'bold' },
      style: typographySprinkles({ fontWeight: 600 }),
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
  weight?: 'regular' | 'semiBold' | 'bold';
  mode?: 'default' | 'reading' | 'bold';
};
