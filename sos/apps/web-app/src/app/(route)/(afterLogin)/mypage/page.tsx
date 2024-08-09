'use client';

import Link from 'next/link';
import { Text, Container, Title, Headline, InfoBox, TabList } from '@sos/components-react';

export default function MyPage() {
  const infos = [
    { title: '나의 팔로잉', content: '0명' },
    { title: '관심지역', content: '0명' },
    { title: '재난문자', content: '0명' },
  ];

  const accountSettings = [
    { icon: 'person', text: '계정 설정', url: '/mypage/account' },
    { icon: 'gps_fixed', text: '위치 설정', url: '/mypage/location' },
    { icon: 'notifications_active', text: '알림 설정', url: '/mypage/alert' },
  ];

  const otherSettings = [
    { icon: 'priority_high', text: '공지사항', url: '/mypage/notification' },
    { icon: 'gavel', text: '법적고지', url: '/mypage/legal' },
  ];

  return (
    <Container display="flex" flexDirection="column" gap={16}>
      <Title>마이페이지</Title>
      <Container paddingX={16} paddingTop={16}>
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
        {accountSettings.map((setting, index) => (
          <Link key={index} href={setting.url} passHref>
            <TabList icon={setting.icon}>{setting.text}</TabList>
          </Link>
        ))}
      </Container>
      <Container
        display="flex"
        flexDirection="column"
        paddingY={16}
        gap={10}
        backgroundColor="backgroundNormalPrimary"
      >
        <Headline mainText="설정" subText="" icon={false} />
        {otherSettings.map((setting, index) => (
          <Link key={index} href={setting.url} passHref>
            <TabList icon={setting.icon}>{setting.text}</TabList>
          </Link>
        ))}
      </Container>
    </Container>
  );
}
