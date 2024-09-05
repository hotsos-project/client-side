'use client';

import {
  Notification,
  InfoButton,
  Container,
  WeatherBox,
  Headline,
  MessageList,
  MoreButton,
} from '@sos/components-react';
import {
  useFetchMemberInfo,
  useFetchSidos,
  useFetchGuguns,
  useFetchReplies,
  useCreateReply,
  useFetchWeather,
} from '@/app/_hooks';
import { useRouter } from 'next/navigation';
import { useEffect, React } from 'react';
import Link from 'next/link';
import EmergencyAlert from './emergency-alert/page';
import { WeatherData } from '@/app/_libs';

// ReactNativeWebView 타입 정의 추가
declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(message: string): void;
    };
  }
}

export default function Home() {
  // 테스트 코드
  console.log(useFetchMemberInfo().data);
  console.log(useFetchSidos().data);
  console.log(useFetchGuguns(1).data);
  console.log(useFetchReplies(1).data);

  const mutation = useCreateReply();

  useEffect(() => {
    // mutation.mutate({ commentId: 0, memberId: 0, data: { content: 'hello' } });
  }, []);

  const router = useRouter();

  const routeToPage = (route: string) => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: 'NAVIGATE',
          url: route,
        }),
      );
    } else {
      router.push(route, undefined, { scroll: false });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    routeToPage(href);
  };

  const weatherInfo = useFetchWeather(37.5665, 126.978).data;

  return (
    <>
      {/* Test */}
      <Container display="flex" paddingX={16} paddingY={20}>
        <Notification state="default"></Notification>
      </Container>
      <Container paddingX={16}>
        <WeatherBox
          temperature={weatherInfo?.temp ?? '-'}
          highestTemperature={weatherInfo?.maxTemp ?? '-'}
          lowestTemperature={weatherInfo?.minTemp ?? '-'}
          iconSrc={weatherInfo?.icon ?? '-'}
          windSpeed={weatherInfo?.windSpeed ?? '-'}
        />
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Container display="flex" justifyContent="space-between">
          <Headline>친구 현황</Headline>
        </Container>
        <Container display="flex" paddingX={12} paddingY={8} gap={16}>
          <InfoButton variant="default" size="s">
            엄마
          </InfoButton>
          <InfoButton variant="danger" badgeText="폭염" size="s">
            아빠
          </InfoButton>
          <InfoButton variant="warning" badgeText="폭염" subText="안전" size="s">
            누나
          </InfoButton>
        </Container>
      </Container>
      <Container display="flex" flexDirection="column" paddingY={16}>
        <Container display="flex" justifyContent="space-between">
          <Headline>재난 문자</Headline>
          <Link href={'/emergency-alert'} onClick={(e) => handleLinkClick(e, '/emergency-alert')}>
            <MoreButton />
          </Link>
        </Container>
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
