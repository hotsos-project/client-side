import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

export const labeStyle = style({
  display: 'flex',
  paddingBottom: vars.spacing.spacing[8],
  color: vars.color.$palette.text.normal,
  gap: vars.spacing.spacing[4],
  fontSize: vars.typography.fontSize[15],
  lineHeight: vars.typography.lineHeight[18],
});

export const starStyle = style({
  color: vars.color.$palette.pink[500],
});

export const inputStyle = style({
  display: 'flex',
  gap: vars.spacing.spacing[10],
});

export const warningStyle = style({
  display: 'flex',
  paddingTop: vars.spacing.spacing[6],
  color: vars.color.$palette.pink[500],
  fontSize: vars.typography.fontSize[13],
  lineHeight: vars.typography.lineHeight[18],
});
