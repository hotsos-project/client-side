import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';
import { colorSprinkles } from '../style/color/sprinkles.css';

export const stateStyle = {
  default: style([colorSprinkles({ color: 'textAssistive' })]),
  active: style([
    colorSprinkles({ color: 'textNormal' }),
    {
      position: 'relative',
      '::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -16,
        width: '100%',
        height: '3px',

        backgroundColor: vars.color.$palette.text.normal,
      },
    },
  ]),
};
