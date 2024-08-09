import { CommonProps } from '../../../common/types';
export interface InfoItemProps extends CommonProps {
    title: string;
    content: string;
    icon?: string;
    size?: 's' | 'm';
}
/**
 * InfoItem 컴포넌트
 *
 * @param {string} [props.title='title'] - 아이템의 제목 (필수, 기본값: 'title')
 * @param {string} [props.content='content'] - 아이템의 내용 (필수, 기본값: 'content')
 * @param {string} [props.icon] - 아이콘 이름 (선택)
 * @param {'s' | 'm'} [props.size='m'] - 아이템의 크기 (선택, 기본값: 'm')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - Container 컴포넌트에 전달될 기타 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export declare const InfoItem: import("react").ForwardRefExoticComponent<InfoItemProps & import("react").RefAttributes<HTMLElement>>;
