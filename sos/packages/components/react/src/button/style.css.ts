import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@sos/style-tokens';
import { borderSprinkles } from '../../src/style/border/sprinkles.css';
import { colorSprinkles } from '../../src/style/color/sprinkles.css';
import { spacingSprinkles } from '../../src/style/spacing/sprinkles.css';

export const buttonRecipe = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderRadius: vars.radius.borderRadius.base,
      textAlign: 'center',
      cursor: 'pointer',
    },
    spacingSprinkles({ columnGap: 4 }),
  ],

  variants: {
    size: {
      s: [spacingSprinkles({ paddingY: 2, paddingX: 8 })],
      m: [spacingSprinkles({ paddingY: 6, paddingX: 12 })],
      l: [spacingSprinkles({ paddingY: 10, paddingX: 16 })],
    },
    variant: {
      primary: colorSprinkles({ color: 'white' }),
      secondary: colorSprinkles({ color: 'white', backgroundColor: 'blueGray500' }),
      tertiary: colorSprinkles({ color: 'blueGray500' }),
    },
    design: {
      fill: [
        colorSprinkles({ backgroundColor: 'uiPrimaryNormal' }),
        {
          selectors: {
            '&:hover': {
              backgroundColor: vars.color.$palette.blue[700],
            },
            '&:disabled': {
              backgroundColor: vars.color.$palette.blueGray[500],
              cursor: 'not-allowed',
              opacity: 0.5,
            },
          },
        },
      ],
      outline: [
        borderSprinkles({
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'uiPrimaryNormal',
        }),
        colorSprinkles({ color: 'uiPrimaryNormal' }),
        {
          selectors: {
            '&:hover': {
              color: vars.color.$palette.blue[700],
              border: `0.0625rem solid ${vars.color.$palette.blue[700]}`,
            },
            '&:disabled': {
              borderColor: vars.color.$palette.blueGray[500],
              color: vars.color.$palette.blueGray[500],
              cursor: 'not-allowed',
              opacity: 0.5,
            },
          },
        },
      ],
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'secondary', design: 'fill' },
      style: [colorSprinkles({ backgroundColor: 'blue700' })],
    },
    {
      variants: { variant: 'secondary', design: 'outline' },
      style: [
        borderSprinkles({
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'blue700',
        }),
        colorSprinkles({ color: 'blue700' }),
      ],
    },
  ],

  defaultVariants: {
    size: 'm',
    variant: 'primary',
    design: 'fill',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
