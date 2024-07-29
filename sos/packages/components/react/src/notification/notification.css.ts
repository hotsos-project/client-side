import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

/**
 * 공통 스타일
 */
export const commonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.spacing[16]} ${vars.spacing.spacing[20]}`,
  borderRadius: vars.radius.borderRadius.base,
  gap: vars.spacing.spacing[20],
  boxShadow: vars.shadow.shadow.s,
});

const state = {
  default: style({
    color: vars.color.$palette.text.normal,
    backgroundColor: vars.color.$palette.background.elevatedPrimary,
  }),
  warning: style({
    color: vars.color.$palette.pink[500],
    backgroundColor: vars.color.$palette.background.elevatedPrimary,
  }),
  danger: style({
    color: vars.color.$static.light.color.white,
    backgroundColor: vars.color.$palette.pink[500],
  }),
};

export const stateStyle = {
  default: state.default,
  warning: state.warning,
  danger: state.danger,
};
