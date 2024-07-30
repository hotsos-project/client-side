interface SectionProps {
    mainText: string;
    subText?: string;
    icon?: boolean;
}
/**
 * Section 컴포넌트의 프로퍼티
 * @property {string} mainText - 섹션의 주요 텍스트. 필수 값입니다.
 * @property {string} [subText='더보기'] - 섹션의 부가 텍스트. 기본값은 '더보기'입니다.
 * @property {boolean} [icon=true] - 아이콘 표시 여부. 기본값은 true입니다.
 */
export declare const Section: React.FC<SectionProps>;
export {};
