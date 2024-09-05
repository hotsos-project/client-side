import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@sos/style-tokens';

export const borderRecipe = recipe({
  variants: {
    borderType: {
      border: {
        borderColor: vars.color.$palette.gray[200],
        borderStyle: 'solid',
        borderWidth: vars.spacing.spacing[1],
      },
      borderTop: {
        borderTopColor: vars.color.$palette.gray[200],
        borderTopStyle: 'solid',
        borderTopWidth: vars.spacing.spacing[1],
      },
      borderBottom: {
        borderBottomColor: vars.color.$palette.gray[200],
        borderBottomStyle: 'solid',
        borderBottomWidth: vars.spacing.spacing[1],
      },
      borderLeft: {
        borderLeftColor: vars.color.$palette.gray[200],
        borderLeftStyle: 'solid',
        borderLeftWidth: vars.spacing.spacing[1],
      },
      borderRight: {
        borderRightColor: vars.color.$palette.gray[200],
        borderRightStyle: 'solid',
        borderRightWidth: vars.spacing.spacing[1],
      },
    },
  },
});

export type BorderVariants = NonNullable<RecipeVariants<typeof borderRecipe>>;
