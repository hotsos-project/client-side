import { CommonProps } from '../../common/types';
interface InputProps extends CommonProps {
    state: 'default' | 'highlight' | 'warning' | 'disabled';
    showIcon?: boolean;
    showButton?: boolean;
}
/**
 * Input 컴포넌트
 *
 * @param {'default' | 'highlight' | 'warning' | 'disabled'} props.state - 인풋의 상태 (필수)
 * @param {boolean} [props.showIcon=true] - 아이콘 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showButton=true] - 버튼 표시 여부 (선택, 기본값: true)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export declare const Input: React.FC<InputProps>;
export {};
