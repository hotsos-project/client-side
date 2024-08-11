import { forwardRef, useState } from 'react';
import { CommonProps } from '../common/types';
import { Container } from '../common/container/Container';
import { Text } from '../common/text/Text';
import { chipsStyle } from './style.css';

interface ChipsProps extends CommonProps {
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary';
  state: 'default' | 'outline' | 'active' | 'disabled';
  name: string;
  value: string;
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  children: React.ReactNode;
}

export const Chips = forwardRef<HTMLInputElement, ChipsProps>(
  (
    {
      size = 'm',
      variant = 'primary',
      state = 'default',
      name,
      value,
      checked = false,
      onToggle,
      children,
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedState = event.target.checked;
      setIsChecked(newCheckedState);
      if (onToggle) {
        console.log('??');
        onToggle(newCheckedState);
      }
    };

    const effectiveState = isChecked ? 'active' : state;

    return (
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="round"
        className={chipsStyle({ size, state: effectiveState, variant })}
      >
        <input
          type="checkbox"
          id={`chip-${value}`}
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          ref={ref}
          style={{ display: 'none' }}
        />
        <label
          htmlFor={`chip-${value}`}
          style={{
            cursor: 'pointer',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            textType={size === 's' ? 'footnote' : size === 'm' ? 'label' : 'body3'}
            color={effectiveState === 'active' ? 'white' : 'textNormal'}
          >
            {children}
          </Text>
        </label>
      </Container>
    );
  },
);
