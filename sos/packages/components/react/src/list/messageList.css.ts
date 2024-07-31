import { recipe } from '@vanilla-extract/recipes';
import { borderSprinkles } from '../style/border/borderSprinkles.css';
import { colorSprinkles } from '../style/color/colorSprinkles.css';
import { RecipeVariants } from '@vanilla-extract/recipes';

export const messageListRecipe = recipe({
  variants: {
    variant: {
      default: {},
      danger: colorSprinkles({ backgroundColor: 'pink10' }),
      warning: colorSprinkles({ backgroundColor: 'orange10' }),
    },
    mode: {
      default: {},
      round: borderSprinkles({ borderRadius: 'ml' }),
    },
  },
  defaultVariants: {
    variant: 'default',
  },

  compoundVariants: [
    {
      variants: { variant: 'danger', mode: 'round' },
      style: borderSprinkles({ borderWidth: 1, borderStyle: 'solid', borderColor: 'pink500' }),
    },
  ],
});

export type MessageListVariants = RecipeVariants<typeof messageListRecipe>;
