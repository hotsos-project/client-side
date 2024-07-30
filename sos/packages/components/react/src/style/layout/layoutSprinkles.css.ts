import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const layoutProperties = defineProperties({
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
  },
});

export const layoutSprinkles = createSprinkles(layoutProperties);

export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0];
