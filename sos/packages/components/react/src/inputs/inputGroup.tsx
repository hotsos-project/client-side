import { labeStyle, starStyle, inputStyle, warningStyle } from './inputGroup.css';
import { Input } from './Input';
import { Button } from '../button/Button';

interface InputGroupProps {
  state: 'default' | 'highlight' | 'warning';
  showButton?: boolean;
  showLabel?: boolean;
  labelContent?: string;
  warningContent?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  state = 'default',
  showButton = true,
  showLabel = true,
  labelContent = 'label',
  warningContent = 'warning text',
}) => {
  return (
    <div>
      {showLabel && (
        <div className={labeStyle}>
          <span>{labelContent}</span>
          <span className={starStyle}>*</span>
        </div>
      )}
      <div className={inputStyle}>
        <Input state={state} showIcon={false} />
        {showButton && <Button size="m" variant="primary" state="default" design="fill" icon="" subText="" mainText="Button" isLoading={false} />}
      </div>
      {state === 'warning' && <div className={warningStyle}>{warningContent}</div>}
    </div>
  );
};
