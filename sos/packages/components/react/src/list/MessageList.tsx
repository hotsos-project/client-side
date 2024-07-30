import { forwardRef } from 'react';
import { DefaultProps } from '../common/types';
import { Container } from '../common/container/Container';
import { Text } from '../common/text/Text';
import { formatDate } from '../utils/dateUtils';
import { Badge } from '../badge/Badge';

interface MessageListProps extends DefaultProps {
  title: string;
  date: Date;
  content: string;
  isRead: boolean;
  isChecked: boolean;
  following: string;
}

export const MessageList = forwardRef<HTMLElement, MessageListProps>(
  ({ title = 'title', date = new Date(), content = 'content', isRead = false, isChecked = false, following = 'following' }, ref) => {
    const dateString = formatDate(date);

    return (
      <Container as="li" ref={ref}>
        <Container as="div">
          <Container as="div">
            <Text>{title}</Text>
            <Badge color="blue"></Badge>
            <span className="material-symbols-outlined">verified</span>
          </Container>
          <Text>{dateString}</Text>
        </Container>
        <Text>{content}</Text>
      </Container>
    );
  },
);
