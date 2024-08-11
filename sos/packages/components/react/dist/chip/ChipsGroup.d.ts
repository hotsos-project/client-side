import React from 'react';
interface ChipsGroupContextType {
    activeValue: string | null;
    onChange: (value: string) => void;
}
interface ChipsGroupProps {
    name: string;
    children: React.ReactNode;
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export declare const ChipsGroup: React.ForwardRefExoticComponent<ChipsGroupProps & React.RefAttributes<HTMLDivElement>>;
export declare const useChipsGroup: () => ChipsGroupContextType;
export {};
