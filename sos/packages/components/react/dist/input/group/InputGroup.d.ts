import { CommonProps } from '../../common/types';
interface InputGroupProps extends CommonProps {
    state: 'default' | 'highlight' | 'warning';
    type?: string;
    showButton?: boolean;
    showLabel?: boolean;
    labelContent?: string;
    warningContent?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
/**
 * InputGroup 컴포넌트
 *
 * @param {'default' | 'highlight' | 'warning'} props.state - 인풋 그룹의 상태 (필수)
 * @param {boolean} [props.showButton=true] - 버튼 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showLabel=true] - 라벨 표시 여부 (선택, 기본값: true)
 * @param {string} [props.labelContent='label'] - 라벨 텍스트 (선택, 기본값: 'label')
 * @param {string} [props.warningContent='warning text'] - 경고 텍스트 (선택, 기본값: 'warning text')
 * @param {string} [props.placeholder] - 인풋의 플레이스홀더 (선택)
 * @param {string} [props.value] - 인풋의 값 (선택)
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - 인풋의 onChange 핸들러 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLDivElement>} ref - 전달받은 ref
 */
export declare const InputGroup: import("react").ForwardRefExoticComponent<InputGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
