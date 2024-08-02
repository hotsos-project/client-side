import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { borderSprinkles } from '../../style/border/sprinkles.css';
import { shadowSprinkles } from '../../style/shadow/sprinkles.css';
import { colorSprinkles } from '../../style/color/sprinkles.css';

export const infoButtonRecipe = recipe({
  base: [borderSprinkles({ borderRadius: 'ml' }), shadowSprinkles({ boxShadow: 's' })],
  variants: {
    variant: {
      default: colorSprinkles({
        backgroundColor: 'backgroundElevatedPrimary',
        color: 'textNormal',
      }),
      danger: colorSprinkles({
        backgroundColor: 'pink500',
        color: 'white',
      }),
      warning: colorSprinkles({
        backgroundColor: 'blue500',
        color: 'white',
      }),
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type InfoButtonVariants = RecipeVariants<typeof infoButtonRecipe>;
