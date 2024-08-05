'use client';

import {
  Notification,
  InfoButton,
  Container,
  WeatherBox,
  Headline,
  MessageList,
} from '@sos/components-react';
import { useUserInfo } from '../_hooks/useUserInfo';

export default function Home() {
  const userInfo = useUserInfo();
  console.log(userInfo.data);

  return (
    <>
      {/* Test */}
      <Container display="flex" paddingX={16} paddingY={20}>
        <Notification state="default"></Notification>
      </Container>
      <Container paddingX={16}>
        <WeatherBox temperature={28} />
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Headline mainText="친구 현황" subText="더보기" />
        <Container display="flex" paddingX={12} paddingY={8} gap={16}>
          <InfoButton variant="default" size="s" mainText="아빠" />
          <InfoButton variant="default" size="s" mainText="엄마" />
          <InfoButton variant="default" size="s" mainText="누나" />
        </Container>
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Headline mainText="재난 문자" subText="더보기" />
        <Container>
          <Container display="flex" flexDirection="column" paddingX={16} paddingY={8} gap={8}>
            <MessageList mode="round"></MessageList>
            <MessageList mode="round"></MessageList>
            <MessageList mode="round"></MessageList>
          </Container>
        </Container>
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Headline mainText="행동 강령" subText="더보기" />
        <Container>
          <Container display="flex" paddingX={16} paddingY={8} gap={8}></Container>
        </Container>
      </Container>
    </>
  );
}
