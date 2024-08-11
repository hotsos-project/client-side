import { CommonProps } from '../common/types';
interface ChipsProps extends CommonProps {
    size: 's' | 'm' | 'l';
    variant: 'primary' | 'secondary';
    state: 'default' | 'outline' | 'active' | 'disabled';
    name: string;
    value: string;
    checked?: boolean;
    onToggle?: (checked: boolean) => void;
    children: React.ReactNode;
}
export declare const Chips: import("react").ForwardRefExoticComponent<ChipsProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
