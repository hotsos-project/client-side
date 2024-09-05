'use client';

import { Text, Container, Title, Headline, InfoBox, TabList } from '@sos/components-react';
import Link from 'next/link';

export default function MyPage() {
  const infos = [
    { title: '나의 팔로잉', content: '0명' },
    { title: '관심지역', content: '0명' },
    { title: '재난문자', content: '0명' },
  ];
  return (
    <>
      <Container display="flex" flexDirection="column" gap={16}>
        <Title>마이페이지</Title>
        <Container padding={16}>
          <Container
            display="flex"
            flexDirection="column"
            padding={24}
            gap={10}
            borderType="border"
            borderRadius="base"
            borderColor={'gray200'}
          >
            <Text textType="heading1" textMode="bold">
              name
            </Text>
            <Text>email@gmail.com</Text>
            <Text>adress</Text>
          </Container>
        </Container>
        <Container display="flex" paddingX={16}>
          <InfoBox infos={infos} backgroundColor="gray100" />
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          paddingY={16}
          gap={10}
          backgroundColor="backgroundNormalPrimary"
        >
          <Headline mainText="설정" subText="" icon={false} />
          <TabList icon="person">계정 설정</TabList>
          <TabList icon="gps_fixed">위치 설정</TabList>
          <TabList icon="notifications_active">알림 설정</TabList>
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          paddingY={16}
          gap={10}
          backgroundColor="backgroundNormalPrimary"
        >
          <Headline mainText="설정" subText="" icon={false} />
          <TabList icon="priority_high">공지사항</TabList>
          <TabList icon="gavel">법적고지</TabList>
        </Container>
      </Container>
    </>
  );
}
