import React from 'react';
import {
  sectionStyle,
  textStyle,
  iconStyle,
  subSectionStyle,
} from './section.css';

interface SectionProps {
  mainText: string;
  subText?: string;
  icon?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  mainText = '가족 상황',
  subText = '더보기',
  icon = true,
}) => {
  const sectionClass = sectionStyle;
  const mainTextClass = textStyle.mainText;
  const subTextClass = subText ? textStyle.subText : '';
  const iconClass = icon ? iconStyle : '';
  const subSectionClass = subSectionStyle;

  return (
    <div className={sectionClass}>
      <div className={mainTextClass}>{mainText}</div>
      <div className={subSectionClass}>
        {subText && <div className={subTextClass}>{subText}</div>}
        {icon && (
          <span className={`${iconClass} material-symbols-outlined`}>
            {'chevron_right'}
          </span>
        )}
      </div>
    </div>
  );
};
