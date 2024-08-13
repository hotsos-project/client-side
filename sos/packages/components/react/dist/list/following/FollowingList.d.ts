import { CommonProps } from '../../common/types';
interface FollowingListProps extends CommonProps {
    nickName?: string;
    name?: string;
    onDelete: () => void;
}
export declare const FollowingList: import("react").ForwardRefExoticComponent<FollowingListProps & import("react").RefAttributes<HTMLElement>>;
export {};
