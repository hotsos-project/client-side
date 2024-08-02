import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { borderSprinkles } from '../../style/border/sprinkles.css';
import { shadowSprinkles } from '../../style/shadow/sprinkles.css';
import { colorSprinkles } from '../../style/color/sprinkles.css';
import { spacingSprinkles } from '../../style/spacing/sprinkles.css';
import { vars } from '@sos/style-tokens';

export const infoButtonRecipe = recipe({
  base: [borderSprinkles({ borderRadius: 'ml' }), shadowSprinkles({ boxShadow: 's' })],
  variants: {
    size: {
      s: [spacingSprinkles({ padding: 8 }), { width: '96px', height: '96px' }],
      m: [spacingSprinkles({ paddingX: 16, paddingY: 10 }), { height: '128px' }],
    },
    variant: {
      default: [
        colorSprinkles({
          backgroundColor: 'backgroundElevatedPrimary',
          color: 'textNormal',
        }),
        {
          selectors: {
            '&:hover': {
              backgroundColor: vars.color.$palette.background.elevatedSecondary,
            },
          },
        },
      ],
      danger: [
        colorSprinkles({
          backgroundColor: 'pink500',
          color: 'white',
        }),
        {
          selectors: {
            '&:hover': {
              backgroundColor: vars.color.$palette.pink[400],
            },
          },
        },
      ],
      warning: [
        colorSprinkles({
          backgroundColor: 'blue500',
          color: 'white',
        }),
        {
          selectors: {
            '&:hover': {
              backgroundColor: vars.color.$palette.blue[400],
            },
          },
        },
      ],
    },
  },
  defaultVariants: {
    size: 's',
    variant: 'default',
  },
});

export type InfoButtonVariants = RecipeVariants<typeof infoButtonRecipe>;
