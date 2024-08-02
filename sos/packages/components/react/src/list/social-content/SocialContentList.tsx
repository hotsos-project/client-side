import { forwardRef } from 'react';
import { CommonProps } from '../../common/types';
import { Container } from '../../common/container/Container';
import { Text } from '../../common/text/Text';
import { Icon } from '../../common/icon/Icon';
import { formatDateWithTime } from '../../utils/dateUtils';
import { Button } from '../../button/Button';

interface SocialContentListProps extends CommonProps {
  title: string;
  writer: string;
  date: Date;
  location: string;
  viewCounts: number;
  commentCounts: number;
  content: string;
  isTrueCounts: number;
  isFalseCounts: number;
}

export const SocialContentList = forwardRef<HTMLElement, SocialContentListProps>(
  (
    {
      children,
      title = 'title',
      writer = 'writer',
      date = new Date(),
      location = 'location',
      viewCounts = 0,
      commentCounts = 0,
      content = 'content',
      isTrueCounts = 0,
      isFalseCounts = 0,
    },
    ref,
  ) => {
    const dateString = formatDateWithTime(date);

    return (
      <Container as="li">
        {/* Title-area */}
        <Container display="flex" flexDirection="column" paddingX={16} paddingTop={20} gap={6}>
          <Container display="flex" justifyContent="space-between">
            <Text textType="heading2" textMode="bold">
              {title}
            </Text>
            <Icon>more_horiz</Icon>
          </Container>
          <Container display="flex" gap={6}>
            <Text textType="label" color="textAlternative">
              {writer}
            </Text>
            <Text textType="label" color="textAssistive">
              {dateString}
            </Text>
          </Container>
        </Container>
        {/* Content-info */}
        <Container
          display="flex"
          paddingX={16}
          paddingY={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Container display="flex" alignItems="center" gap={4}>
            <Icon size={15} color="blue500">
              location_on
            </Icon>
            <Text as="span" textType="body3" color="blue500">
              {location}
            </Text>
          </Container>
          <Container display="flex" alignItems="center" gap={8}>
            <Container display="flex" gap={6}>
              <Text textType="label" color="textAssistive">
                조회
              </Text>
              <Text textType="label" textMode="bold" color="textAlternative">
                {viewCounts}
              </Text>
            </Container>
            <Text>·</Text>
            <Container display="flex" gap={6}>
              <Text textType="label" color="textAssistive">
                댓글
              </Text>
              <Text textType="label" textMode="bold" color="textAlternative">
                {commentCounts}
              </Text>
            </Container>
          </Container>
        </Container>
        {/*  */}
        <Container display="flex" justifyContent="center" alignItems="center" width="100%">
          {children}
        </Container>
        <Container padding={16}>
          <Text>{content}</Text>
        </Container>
        <Container
          display="flex"
          padding={16}
          justifyContent="space-between"
          alignItems="center"
          borderType="borderTop"
        >
          <Button variant="secondary" mainText="사실이에요" size="s"></Button>
          <Button mainText="허위사실이에요" size="s"></Button>

          <Button icon="chat" leftSubText={commentCounts} size="s"></Button>
        </Container>
      </Container>
    );
  },
);
