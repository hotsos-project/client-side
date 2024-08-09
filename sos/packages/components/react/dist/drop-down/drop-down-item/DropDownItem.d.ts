import React from 'react';
interface DropDownItemProps extends React.HTMLAttributes<HTMLElement> {
    state?: 'default' | 'active';
}
export declare const DropDownItem: React.ForwardRefExoticComponent<DropDownItemProps & React.RefAttributes<HTMLElement>>;
export {};
