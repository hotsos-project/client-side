import { forwardRef } from 'react';
import { CommonProps } from '../../common/types';
import { Badge } from '../../badge/Badge';
import { Text } from '../../common/text/Text';
import { infoButtonRecipe, InfoButtonVariants } from './style.css';
import clsx from 'clsx';

interface InfoButtonProps extends CommonProps, NonNullable<InfoButtonVariants> {
  badgeText?: string;
  mainText: string;
  subText?: string;
}

export const InfoButton = forwardRef<HTMLButtonElement, InfoButtonProps>(
  ({ size, variant, badgeText, mainText = 'mainText', subText, className, ...props }, ref) => {
    const infoButtonClass = infoButtonRecipe({ size, variant });

    return (
      <button ref={ref} className={clsx(infoButtonClass, className)} {...props}>
        {badgeText && <Badge>{badgeText}</Badge>}
        <Text>{mainText}</Text>
        <Text>{subText}</Text>
      </button>
    );
  },
);
