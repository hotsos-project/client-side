import { forwardRef } from 'react';
import { Container } from '../../common/container/Container';
import { CommonProps } from '../../common/types';
import { inputStyle } from '../style.css';

/**
 * Headline
 *
 * @param {React.ReactNode} [props.children='제목'] - 헤드라인에 표시될 자식 요소 (필수)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - `CommonProps`에 정의된 기타 속성
 */
export const TextArea = forwardRef<HTMLDivElement, CommonProps>(({ children, className }, ref) => {
  return (
    <Container display="flex" width={'100%'} className={className} ref={ref}>
      <textarea
        placeholder="내용을 작성하세요."
        className={inputStyle}
        style={{ padding: '0px' }}
      />
    </Container>
  );
});
