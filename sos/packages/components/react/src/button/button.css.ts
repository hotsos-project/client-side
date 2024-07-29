import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

/**
 * 공통 스타일
 */
export const commonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: vars.radius.borderRadius.ml,
  textAlign: 'center',
  gap: vars.spacing.spacing[2],
});

/**
 * Size 스타일
 */
const sizeVariants = {
  small: style({
    padding: `${vars.spacing.spacing[2]} ${vars.spacing.spacing[8]}`,
    fontSize: vars.typography.fontSize[15],
    lineHeight: vars.typography.lineHeight[20],
  }),
  medium: style({
    padding: `${vars.spacing.spacing[6]} ${vars.spacing.spacing[12]}`,
    fontSize: vars.typography.fontSize[16],
    lineHeight: vars.typography.lineHeight[21],
  }),
  large: style({
    padding: `${vars.spacing.spacing[10]} ${vars.spacing.spacing[16]}`,
    fontSize: vars.typography.fontSize[17],
    lineHeight: vars.typography.lineHeight[22],
  }),
};

export const sizeStyle = {
  s: sizeVariants.small,
  m: sizeVariants.medium,
  l: sizeVariants.large,
};

/**
 * State 스타일
 */
const fillStyles = {
  default: style({
    color: vars.color.$static.light.color.white,
    backgroundColor: vars.color.$palette.ui.primaryNormal,
  }),
  hover: style({
    color: vars.color.$static.light.color.white,
    backgroundColor: vars.color.$palette.blue[600],
  }),
  disabled: style({
    color: vars.color.$palette.blueGray[200],
    backgroundColor: vars.color.$palette.blueGray[50],
  }),
  secondary: style({
    color: vars.color.$static.light.color.white,
    backgroundColor: vars.color.$palette.blueGray[500],
  }),
  tertiary: style({
    color: vars.color.$palette.blueGray[500],
    backgroundColor: 'transparent',
  }),
};

const outlineStyles = {
  default: style({
    border: `0.0635rem solid ${vars.color.$palette.ui.primaryNormal}`,
    color: vars.color.$palette.ui.primaryNormal,
  }),
  hover: style({
    border: `0.0635rem solid ${vars.color.$palette.blue[700]}`,
    color: vars.color.$palette.blue[800],
  }),
  disabled: style({
    border: `0.0635rem solid ${vars.color.$palette.blueGray[50]}`,
    color: vars.color.$palette.blueGray[200],
  }),
  secondary: style({
    border: `0.0635rem solid ${vars.color.$palette.gray[200]}`,
    color: vars.color.$static.light.text.normal,
  }),
};

export const stateStyle = {
  defaultFill: fillStyles.default,
  defaultOutline: outlineStyles.default,
  secondaryFill: fillStyles.secondary,
  secondaryOutline: outlineStyles.secondary,
  tertiaryFill: fillStyles.tertiary,
  hoverFill: fillStyles.hover,
  hoverOutline: outlineStyles.hover,
  disabledFill: fillStyles.disabled,
  disabledOutline: outlineStyles.disabled,
};

/**
 * Text 스타일
 */
export const mainTextStyle = style({
  fontWeight: 600,
});

export const subTextStyle = style({
  fontWeight: 400,
});

export const baseStyle = commonStyle;
