import { style } from '@vanilla-extract/css';
import { vars } from '@sos/style-tokens';

export const sectionStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingLeft: vars.spacing.spacing[16],
  paddingRight: vars.spacing.spacing[4],
  color: vars.color.$palette.text.normal,
  backgroundColor: vars.color.$palette.background.normalPrimary,
  textAlign: 'center',
});

const text = {
  mainText: style({
    color: vars.color.$palette.text.normal,
    fontSize: vars.typography.fontSize[20],
    fontWeight: vars.typography.fontWeight[600],
    lineHeight: vars.typography.lineHeight[25],
  }),
  subText: style({
    color: vars.color.$palette.text.assistive,
    fontSize: vars.typography.fontSize[15],
    fontWeight: vars.typography.fontWeight[400],
    lineHeight: vars.typography.lineHeight[20],
  }),
};

export const textStyle = {
  mainText: text.mainText,
  subText: text.subText,
};

export const iconStyle = style({
  color: vars.color.$palette.text.assistive,
});

export const subSectionStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: vars.spacing.spacing[12],
  gap: vars.spacing.spacing[4],
});
