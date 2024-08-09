import React from 'react';
import { CommonProps } from '../../common/types';
interface InputGroupProps extends CommonProps {
    state: 'default' | 'highlight' | 'warning' | 'disabled' | 'readonly';
    type?: string;
    showButton?: boolean;
    showLabel?: boolean;
    showStar?: boolean;
    showPasswordToggle?: boolean;
    labelContent?: string;
    warningContent?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonText?: string;
    buttonDisabled?: boolean;
    onButtonClick?: () => void;
    buttonType?: 'button' | 'submit' | 'reset';
}
export declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
