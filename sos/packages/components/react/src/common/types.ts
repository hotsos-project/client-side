import { PaletteColors } from '../style/color/colorSprinkles.css';
import { ElementType } from 'react';

export type AsProps = {
  as?: ElementType;
};

export interface DefaultProps {
  backgroundColor?: PaletteColors;
  color?: PaletteColors;
  className?: string;
}
