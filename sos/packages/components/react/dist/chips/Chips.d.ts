import { DefaultProps } from '../common/types';
interface ChipsProps extends DefaultProps {
    size: 's' | 'm' | 'l';
    variant: 'primary' | 'secondary';
    state: 'default' | 'outline' | 'active' | 'disabled';
    content: string;
}
/**
 * Chips 컴포넌트
 *
 * @param {'s' | 'm' | 'l'} props.size - 칩의 크기 (필수, 기본값: 'm')
 * @param {'primary' | 'secondary'} props.variant - 칩의 변형 스타일 (필수, 기본값: 'primary')
 * @param {'default' | 'outline' | 'active' | 'disabled'} props.state - 칩의 상태 (필수, 기본값: 'default')
 * @param {string} props.content - 칩에 표시될 텍스트 내용 (필수, 기본값: 'Label')
 */
export declare const Chips: React.FC<ChipsProps>;
export {};
