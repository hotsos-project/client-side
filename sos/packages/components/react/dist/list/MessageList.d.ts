import { DefaultProps } from '../common/types';
interface MessageListProps extends DefaultProps {
    title: string;
    date: Date;
    content: string;
    isRead: boolean;
    isChecked: boolean;
    following: string;
}
export declare const MessageList: import("react").ForwardRefExoticComponent<MessageListProps & import("react").RefAttributes<HTMLElement>>;
export {};
