'use client';
import {
  Container,
  Text,
  Icon,
  Input,
  Badge,
  Button,
  SocialContentList,
} from '@sos/components-react';
import { vars } from '@sos/style-tokens';

export default function Social() {
  return (
    <>
      <Container display="flex" flexDirection="column" style={{ position: 'relative' }}>
        <Container
          display="flex"
          padding={16}
          gap={10}
          backgroundColor="backgroundNormalPrimary"
          width={'100%'}
          style={{ position: 'fixed', top: 0, zIndex: 10 }}
        >
          <Container display="flex" justifyContent="center" alignItems="center" gap={10}>
            <Badge size="l">{'관심'}</Badge>
            <Text textMode="bold">{'region'}</Text>
          </Container>
          <Icon>{'expand_more'}</Icon>
        </Container>
        <Container
          display="flex"
          paddingX={16}
          paddingY={12}
          style={{ position: 'fixed', top: 56, width: '100%', zIndex: 10 }}
        >
          <Input state="default" placeholder="검색어를 입력하세요." />
        </Container>
      </Container>

      <Container style={{ paddingTop: '125px' }} display="flex" flexDirection="column" gap={16}>
        <Container
          display="flex"
          flexDirection="column"
          gap={16}
          backgroundColor="backgroundNormalPrimary"
        >
          <SocialContentList />
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          gap={16}
          backgroundColor="backgroundNormalPrimary"
        >
          <SocialContentList />
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          gap={16}
          backgroundColor="backgroundNormalPrimary"
        >
          <SocialContentList />
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          gap={16}
          backgroundColor="backgroundNormalPrimary"
        >
          <SocialContentList />
        </Container>
      </Container>
      <Container
        display="flex"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 10,
        }}
      >
        <Button
          icon="add"
          variant="primary"
          size="l"
          style={{
            borderRadius: vars.radius.borderRadius.round,
          }}
        />
      </Container>
    </>
  );
}
