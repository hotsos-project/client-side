import { AsProps, DefaultProps } from '../types';
interface ContainerProps extends AsProps, DefaultProps {
    children: React.ReactNode;
}
export declare const Container: import("react").ForwardRefExoticComponent<ContainerProps & import("react").RefAttributes<HTMLElement>>;
export {};
