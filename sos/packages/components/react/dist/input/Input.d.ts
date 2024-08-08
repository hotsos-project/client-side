import React from 'react';
import { CommonProps } from '../common/types';
interface InputProps extends CommonProps {
    state: 'default' | 'highlight' | 'warning' | 'disabled';
    placeholder: string;
    type?: string;
    showIcon?: boolean;
    showButton?: boolean;
    showPasswordToggle?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Input 컴포넌트
 *
 * @param {'default' | 'highlight' | 'warning' | 'disabled'} props.state - 인풋의 상태 (필수)
 * @param {boolean} [props.showIcon=true] - 아이콘 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showButton=true] - 버튼 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showPasswordToggle=false] - 비밀번호 토글 버튼 표시 여부 (선택, 기본값: false)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {string} props.placeholder - 인풋의 플레이스홀더 (필수)
 * @param {...any} props - 기타 HTML 속성
 * @param {React.Ref<HTMLInputElement>} ref - 전달받은 ref
 */
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
