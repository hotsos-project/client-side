import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

export const titleStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  padding: vars.spacing.spacing[16],
  paddingTop: vars.spacing.spacing[64],
  borderBottom: `0.0625rem soild ${vars.color.$palette.gray[100]}`,
  color: vars.color.$palette.text.normal,
  backgroundColor: vars.color.$palette.background.normalPrimary,
  fontSize: vars.typography.fontSize[28],
  fontWeight: vars.typography.fontWeight[700],
  lineHeight: vars.typography.lineHeight[34],
});
