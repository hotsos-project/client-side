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
import { useRouter } from 'next/navigation';

export default function Home() {
  const userInfo = useUserInfo();
  const router = useRouter();
  console.log(userInfo.data);

  const routeToPage = (route: string) => {
    router.push(route);
  };

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
        <Headline
          mainText="재난 문자"
          subText="더보기"
          onClick={() => {
            routeToPage('/emergency-alert');
          }}
        />
        <Container>
          <Container display="flex" flexDirection="column" paddingX={16} paddingY={8} gap={8}>
            <MessageList
              mode="round"
              onClick={() => {
                routeToPage('/emergency-alert/1');
              }}
            ></MessageList>
            <MessageList
              mode="round"
              onClick={() => {
                routeToPage('/emergency-alert/2');
              }}
            ></MessageList>
            <MessageList
              mode="round"
              onClick={() => {
                routeToPage('/emergency-alert/3');
              }}
            ></MessageList>
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
