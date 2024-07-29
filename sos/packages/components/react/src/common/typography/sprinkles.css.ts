// typography.css.ts
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '@sos/style-tokens';

const typographyProperties = defineProperties({
  conditions: {
    default: {},
    bold: { selector: '&.bold' },
    reading: { selector: '&.reading' },
  },
  defaultCondition: 'default',
  properties: {
    fontSize: vars.typography.fontSize,
    fontWeight: vars.typography.fontWeight,
    lineHeight: vars.typography.lineHeight,
  },
});

export const typographySprinkles = createSprinkles(typographyProperties);

export type TypographyStyles = Parameters<typeof typographySprinkles>[0];
