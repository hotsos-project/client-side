import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';
import { colorSprinkles } from '../../style/color/colorSprinkles.css';

export const titleStyle = style([
  colorSprinkles({
    backgroundColor: 'backgroundNormalPrimary',
  }),
  {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    padding: vars.spacing.spacing[16],
    paddingTop: vars.spacing.spacing[64],
    borderBottom: `0.0625rem soild ${vars.color.$palette.gray[100]}`,
  },
]);
