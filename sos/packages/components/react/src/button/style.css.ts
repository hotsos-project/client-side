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
      textAlign: 'center',
      width: '100%',
      cursor: 'pointer',
    },
    spacingSprinkles({ columnGap: 4 }),
  ],

  variants: {
    size: {
      s: [
        spacingSprinkles({ paddingY: 2, paddingX: 8 }),
        { fontSize: vars.typography.fontSize[15], lineHeight: vars.typography.lineHeight[20] },
      ],
      m: [
        spacingSprinkles({ paddingY: 6, paddingX: 12 }),
        { fontSize: vars.typography.fontSize[16], lineHeight: vars.typography.lineHeight[21] },
      ],
      l: [
        spacingSprinkles({ paddingY: 10, paddingX: 16 }),
        { fontSize: vars.typography.fontSize[17], lineHeight: vars.typography.lineHeight[22] },
      ],
    },
    variant: {
      primary: colorSprinkles({ color: 'white', backgroundColor: 'uiPrimaryNormal' }),
      secondary: colorSprinkles({ color: 'white', backgroundColor: 'blueGray500' }),
      tertiary: colorSprinkles({ color: 'blueGray500' }),
    },
    design: {
      fill: {},
      outline: [
        borderSprinkles({
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'uiPrimaryNormal',
        }),
        colorSprinkles({ color: 'uiPrimaryNormal' }),
      ],
    },
    state: {
      default: {},
      hover: {},
      active: {},
      disabled: colorSprinkles({
        color: 'blueGray200',
        backgroundColor: 'blueGray50',
      }),
      cursor: 'disabled',
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'primary', state: 'hover' },
      style: colorSprinkles({ backgroundColor: 'uiPrimaryHover' }),
    },
    {
      variants: { variant: 'secondary', state: 'hover' },
      style: colorSprinkles({ backgroundColor: 'blueGray600' }),
    },
    {
      variants: { variant: 'tertiary', state: 'hover' },
      style: colorSprinkles({ color: 'blueGray600' }),
    },
    {
      variants: { variant: 'primary', design: 'outline', state: 'hover' },
      style: [
        borderSprinkles({ borderColor: 'uiPrimaryHover' }),
        colorSprinkles({ color: 'uiPrimaryHover' }),
      ],
    },
  ],

  defaultVariants: {
    size: 'm',
    variant: 'primary',
    design: 'fill',
    state: 'default',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
