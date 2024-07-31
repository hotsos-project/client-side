import { DefaultProps } from '../common/types';
interface CollectionProps extends DefaultProps {
    size: 's' | 'm';
    content: string;
    badge?: boolean;
}
export declare const Collection: React.FC<CollectionProps>;
export {};
