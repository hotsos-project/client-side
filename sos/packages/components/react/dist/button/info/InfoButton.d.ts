import { CommonProps } from '../../common/types';
import { InfoButtonVariants } from './style.css';
interface InfoButtonProps extends CommonProps, NonNullable<InfoButtonVariants> {
    badgeText?: string;
    mainText: string;
    subText?: string;
}
export declare const InfoButton: import("react").ForwardRefExoticComponent<InfoButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
