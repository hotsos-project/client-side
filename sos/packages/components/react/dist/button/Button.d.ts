interface ButtonProps {
    size: 's' | 'm' | 'l';
    variant: 'primary' | 'secondary' | 'tertiary';
    state: 'default' | 'hover' | 'disabled';
    design: 'fill' | 'outline';
    icon?: string;
    subText?: string;
    mainText: string;
    isLoading?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export {};
