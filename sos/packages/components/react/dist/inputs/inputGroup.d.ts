interface InputGroupProps {
    state: 'default' | 'highlight' | 'warning';
    showButton?: boolean;
    showLabel?: boolean;
    labelContent?: string;
    warningContent?: string;
}
export declare const InputGroup: React.FC<InputGroupProps>;
export {};
