import { CommonProps } from '../../common/types';
interface SocialContentListProps extends CommonProps {
    title: string;
    writer: string;
    date: string;
    location: string;
    viewCounts: number;
    commentCounts: number;
    content: string;
    isTrueCounts: number;
    isFalseCounts: number;
}
export declare const SocialContentList: import("react").ForwardRefExoticComponent<SocialContentListProps & import("react").RefAttributes<HTMLElement>>;
export {};
