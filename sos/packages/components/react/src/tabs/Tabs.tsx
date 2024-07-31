import { forwardRef } from 'react';
import clsx from 'clsx';
import { CommonProps } from '../common/types';
import { stateStyle } from './style.css';
import { Container } from '../common/container/Container';
import { Text } from '../common/text/Text';

interface MessageListProps extends Omit<CommonProps, 'color'> {
  state: 'default' | 'active';
  content: string;
}

export const Tabs = forwardRef<HTMLElement, MessageListProps>(
  ({ state = 'default', content = 'Tabs', className, ...props }, ref) => {
    const stateClass = stateStyle[state];
    return (
      <Container
        ref={ref}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={91}
        paddingX={16}
        {...props}
      >
        <Container display="flex" justifyContent="center" width={'100%'} paddingY={16}>
          <Text textType="body1" textMode="bold" className={stateClass}>
            {content}
          </Text>
        </Container>
      </Container>
    );
  },
);
