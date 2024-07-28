import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

/**
 * 공통 스타일
 */
export const commonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.spacing[1]} ${vars.spacing.spacing[1]}`,
  borderRadius: vars.radius.borderRadius['sm'],
  textAlign: 'center',
});

/**
 * size 스타일
 */
const size = {
  small: style({
    padding: `${vars.spacing.spacing[1]} ${vars.spacing.spacing[1]}`,
    fontSize: vars.typography.fontSize[12],
    lineHeight: vars.typography.lineHeight[16],
  }),
  medium: style({
    padding: `${vars.spacing.spacing[1]} ${vars.spacing.spacing[1]}`,
    fontSize: vars.typography.fontSize[13],
    lineHeight: vars.typography.lineHeight[18],
  }),
  large: style({
    padding: `${vars.spacing.spacing[2]} ${vars.spacing.spacing[2]}`,
    fontSize: vars.typography.fontSize[14],
    lineHeight: vars.typography.lineHeight[19],
  }),
};

export const sizeStyle = {
  s: size.small,
  m: size.medium,
  l: size.large,
};

/**
 * color 스타일
 */
export const colorStyle = {
  blue: style({
    border: `0.0625rem soild ${vars.color.$palette.blue[50]}`,
    color: vars.color.$palette.ui.primaryNormal,
    backgroundColor: vars.color.$palette.blue[50],
  }),
  pink: style({
    border: `0.0625rem soild ${vars.color.$palette.pink[50]}`,
    color: vars.color.$palette.pink[500],
    backgroundColor: vars.color.$palette.pink[50],
  }),
  orange: style({
    border: `0.0625rem soild ${vars.color.$palette.orange[50]}`,
    color: vars.color.$palette.orange[500],
    backgroundColor: vars.color.$palette.orange[50],
  }),
  green: style({
    border: `0.0625rem soild ${vars.color.$palette.green[50]}`,
    color: vars.color.$palette.green[500],
    backgroundColor: vars.color.$palette.green[50],
  }),
};
