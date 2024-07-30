import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@sos/style-tokens';

export const typographyRecipe = recipe({
  base: { fontFamily: vars.typography.fontFamily.main },

  variants: {
    type: {
      display1: {
        fontSize: vars.typography.fontSize[60],
        lineHeight: vars.typography.lineHeight[72],
        fontWeight: vars.typography.fontWeight[400],
      },
      display2: {
        fontSize: vars.typography.fontSize[40],
        lineHeight: vars.typography.lineHeight[48],
        fontWeight: vars.typography.fontWeight[400],
      },
      title1: {
        fontSize: vars.typography.fontSize[34],
        lineHeight: vars.typography.lineHeight[41],
        fontWeight: vars.typography.fontWeight[400],
      },
      title2: {
        fontSize: vars.typography.fontSize[28],
        lineHeight: vars.typography.lineHeight[34],
        fontWeight: vars.typography.fontWeight[400],
      },
      title3: {
        fontSize: vars.typography.fontSize[24],
        lineHeight: vars.typography.lineHeight[30],
        fontWeight: vars.typography.fontWeight[400],
      },
      heading1: {
        fontSize: vars.typography.fontSize[22],
        lineHeight: vars.typography.lineHeight[28],
        fontWeight: vars.typography.fontWeight[400],
      },
      heading2: {
        fontSize: vars.typography.fontSize[20],
        lineHeight: vars.typography.lineHeight[25],
        fontWeight: vars.typography.fontWeight[400],
      },
      headline: {
        fontSize: vars.typography.fontSize[18],
        lineHeight: vars.typography.lineHeight[23],
        fontWeight: vars.typography.fontWeight[400],
      },
      body1: {
        fontSize: vars.typography.fontSize[17],
        lineHeight: vars.typography.lineHeight[22],
        fontWeight: vars.typography.fontWeight[400],
      },
      body2: {
        fontSize: vars.typography.fontSize[16],
        lineHeight: vars.typography.lineHeight[21],
        fontWeight: vars.typography.fontWeight[400],
      },
      body3: {
        fontSize: vars.typography.fontSize[15],
        lineHeight: vars.typography.lineHeight[20],
        fontWeight: vars.typography.fontWeight[400],
      },
      label: {
        fontSize: vars.typography.fontSize[14],
        lineHeight: vars.typography.lineHeight[19],
        fontWeight: vars.typography.fontWeight[400],
      },
      footnote: {
        fontSize: vars.typography.fontSize[13],
        lineHeight: vars.typography.lineHeight[18],
        fontWeight: vars.typography.fontWeight[400],
      },
      caption: {
        fontSize: vars.typography.fontSize[12],
        lineHeight: vars.typography.lineHeight[16],
        fontWeight: vars.typography.fontWeight[400],
      },
    },
    mode: {
      default: {},
      reading: {},
      bold: {},
    },
  },

  compoundVariants: [
    {
      variants: { type: 'body1', mode: 'reading' },
      style: { lineHeight: vars.typography.lineHeight[28] },
    },
    {
      variants: { type: 'body2', mode: 'reading' },
      style: { lineHeight: vars.typography.lineHeight[26] },
    },
    {
      variants: { type: 'body3', mode: 'reading' },
      style: { lineHeight: vars.typography.lineHeight[24] },
    },
    {
      variants: { type: 'label', mode: 'reading' },
      style: { lineHeight: vars.typography.lineHeight[22] },
    },
    {
      variants: { type: 'display1', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[700] },
    },
    {
      variants: { type: 'display2', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[700] },
    },
    {
      variants: { type: 'title1', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[700] },
    },
    {
      variants: { type: 'title2', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[700] },
    },
    {
      variants: { type: 'title3', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[700] },
    },
    {
      variants: { type: 'body1', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'body2', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'body3', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'caption', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'footnote', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'heading1', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'heading2', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'headline', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
    },
    {
      variants: { type: 'label', mode: 'bold' },
      style: { fontWeight: vars.typography.fontWeight[600] },
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
  mode?: 'default' | 'reading' | 'bold';
};
