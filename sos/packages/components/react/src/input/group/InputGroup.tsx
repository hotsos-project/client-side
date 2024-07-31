import { labeStyle, starStyle, inputStyle, warningStyle } from './style.css';
import { Input } from '../input/Input';
import { Button } from '../../button/Button';
import { CommonProps } from '../../common/types';

interface InputGroupProps extends CommonProps {
  state: 'default' | 'highlight' | 'warning';
  showButton?: boolean;
  showLabel?: boolean;
  labelContent?: string;
  warningContent?: string;
}

/**
 * InputGroup 컴포넌트
 *
 * @param {'default' | 'highlight' | 'warning'} props.state - 인풋 그룹의 상태 (필수)
 * @param {boolean} [props.showButton=true] - 버튼 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.showLabel=true] - 라벨 표시 여부 (선택, 기본값: true)
 * @param {string} [props.labelContent='label'] - 라벨 텍스트 (선택, 기본값: 'label')
 * @param {string} [props.warningContent='warning text'] - 경고 텍스트 (선택, 기본값: 'warning text')
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export const InputGroup: React.FC<InputGroupProps> = ({
  state = 'default',
  showButton = true,
  showLabel = true,
  labelContent = 'label',
  warningContent = 'warning text',
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {showLabel && (
        <div className={labeStyle}>
          <span>{labelContent}</span>
          <span className={starStyle}>*</span>
        </div>
      )}
      <div className={inputStyle}>
        <Input state={state} showIcon={false} />
        {showButton && (
          <Button
            size="m"
            variant="primary"
            state="default"
            design="fill"
            icon=""
            subText=""
            mainText="Button"
            isLoading={false}
          />
        )}
      </div>
      {state === 'warning' && <div className={warningStyle}>{warningContent}</div>}
    </div>
  );
};
