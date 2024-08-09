import React, { useState, forwardRef } from 'react';
import { Container } from '../../common/container/Container';
import { Text } from '../../common/text/Text';

interface DropDownItemProps extends React.HTMLAttributes<HTMLElement> {
  state?: 'default' | 'active';
}

export const DropDownItem = forwardRef<HTMLElement, DropDownItemProps>(
  ({ state: initialState = 'default', children, className }, ref) => {
    const [state, setState] = useState<'default' | 'active'>(initialState);

    const handleClick = () => {
      setState('active');
    };

    return (
      <>
        <Container
          display="flex"
          paddingX={16}
          paddingY={10}
          borderRadius="s"
          backgroundColor={state === 'active' ? 'gray50' : 'backgroundNormalPrimary'}
          style={{ width: '153px' }}
          className={className}
          ref={ref}
          onClick={handleClick}
        >
          <Text textType="label">{children}</Text>
        </Container>
      </>
    );
  },
);
