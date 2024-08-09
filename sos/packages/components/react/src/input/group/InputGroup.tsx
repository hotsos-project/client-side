import React, { forwardRef } from 'react';
import { labelStyle, starStyle, inputStyle, warningStyle } from './style.css';
import { Input } from '../Input';
import { Button } from '../../button/Button';
import { Text } from '../../common/text/Text';
import { Container } from '../../common/container/Container';
import { CommonProps } from '../../common/types';

interface InputGroupProps extends CommonProps {
  state: 'default' | 'highlight' | 'warning' | 'disabled' | 'readonly';
  type?: string;
  showButton?: boolean;
  showLabel?: boolean;
  showStar?: boolean;
  showPasswordToggle?: boolean;
  labelContent?: string;
  warningContent?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText?: string;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      state = 'default',
      showButton = true,
      showLabel = true,
      showStar = true,
      showPasswordToggle = false,
      labelContent = 'label',
      warningContent = 'warning text',
      buttonText = 'Submit',
      placeholder = '',
      type,
      value,
      defaultValue = '',
      buttonDisabled = false,
      buttonType = 'button',
      onButtonClick,
      onChange,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Container display="flex" flexDirection="column" className={className} ref={ref} {...props}>
        {showLabel && (
          <Container className={labelStyle}>
            <Text>{labelContent}</Text>
            {showStar && <span className={starStyle}>*</span>}
          </Container>
        )}
        <Container display="flex" className={inputStyle}>
          <Input
            state={state}
            type={type}
            showIcon={false}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            showPasswordToggle={showPasswordToggle}
            disabled={state === 'disabled'}
            readOnly={state === 'readonly'}
          />
          {showButton && (
            <Container>
              <Button
                variant="primary"
                design="outline"
                onClick={onButtonClick}
                disabled={buttonDisabled || state === 'disabled'}
                type={buttonType}
              >
                {buttonText}
              </Button>
            </Container>
          )}
        </Container>
        {state === 'warning' && <div className={warningStyle}>{warningContent}</div>}
      </Container>
    );
  },
);
