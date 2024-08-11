import { recipe } from '@vanilla-extract/recipes';
import { colorSprinkles } from '../../src/style/color/sprinkles.css'; // sprinkles에서 가져오는 것
import { vars } from '@sos/style-tokens';
import { Palette } from '../../src/style/color/sprinkles.css';

export const chipsStyle = recipe({
  base: {},
  variants: {
    size: {
      s: {
        height: '1.125rem',
        padding: `${vars.spacing.spacing[4]} ${vars.spacing.spacing[8]}`,
      },
      m: {
        height: '1.1875rem',
        padding: `${vars.spacing.spacing[6]} ${vars.spacing.spacing[12]}`,
      },
      l: {
        height: '1.25rem',
        padding: `${vars.spacing.spacing[8]} ${vars.spacing.spacing[16]}`,
      },
    },
    state: {
      default: {},
      outline: {},
      active: {},
      disabled: {
        color: colorSprinkles({ color: 'blueGray200' }),
        backgroundColor: colorSprinkles({ backgroundColor: 'blueGray50' }),
      },
    },
    variant: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        state: 'default',
        variant: 'primary',
      },
      style: {
        color: colorSprinkles({ color: 'blue500' }),
        backgroundColor: colorSprinkles({ backgroundColor: 'blue100' }),
      },
    },
    {
      variants: {
        state: 'default',
        variant: 'secondary',
      },
      style: {
        color: colorSprinkles({ color: 'textNormal' }),
        backgroundColor: colorSprinkles({ backgroundColor: 'gray100' }),
      },
    },
    {
      variants: {
        state: 'outline',
        variant: 'primary',
      },
      style: {
        border: `0.0625rem solid ${colorSprinkles({ color: 'blue100' })}`,
        color: colorSprinkles({ color: 'blue500' }),
        backgroundColor: 'transparent',
      },
    },
    {
      variants: {
        state: 'outline',
        variant: 'secondary',
      },
      style: {
        border: `0.0625rem solid ${colorSprinkles({ color: 'gray200' })}`,
        color: colorSprinkles({ color: 'textNormal' }),
        backgroundColor: 'transparent',
      },
    },
    {
      variants: {
        state: 'active',
        variant: 'primary',
      },
      style: {
        color: colorSprinkles({ color: 'white950' }),
        backgroundColor: colorSprinkles({ backgroundColor: 'blue500' }),
      },
    },
    {
      variants: {
        state: 'active',
        variant: 'secondary',
      },
      style: {
        border: `0.0625rem solid ${colorSprinkles({ color: 'blue500' })}`,
        color: colorSprinkles({ color: 'blue500' }),
        backgroundColor: colorSprinkles({ backgroundColor: 'blue100' }),
      },
    },
  ],
  defaultVariants: {
    size: 'm',
    state: 'default',
    variant: 'primary',
  },
});

export const getTextColor = ({
  state,
  variant,
}: {
  state: 'default' | 'outline' | 'active' | 'disabled';
  variant: 'primary' | 'secondary';
}): Palette => {
  if (state === 'disabled') return 'blueGray200';

  if (state === 'active') {
    return variant === 'primary' ? 'blue500' : 'blue500';
  }

  if (state === 'outline') {
    return variant === 'primary' ? 'blue500' : 'textNormal';
  }

  // Default state
  return variant === 'primary' ? 'blue500' : 'textNormal';
};
