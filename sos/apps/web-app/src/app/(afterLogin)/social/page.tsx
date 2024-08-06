'use client';
import { Container, Text, Icon, Input, Badge, SocialContentList } from '@sos/components-react';

export default function Social() {
  return (
    <div>
      <Container display="flex" padding={16} gap={10} backgroundColor="backgroundNormalPrimary">
        <Container display="flex" justifyContent="center" alignItems="center" gap={10}>
          <Badge size="l">{'관심'}</Badge>
          <Text textMode="bold">{'region'}</Text>
        </Container>
        <Icon>{'expand_more'}</Icon>
      </Container>
      <Container display="flex" paddingX={16} paddingY={12}>
        <Input state="default" />
      </Container>
      <Container display="flex" flexDirection="column" gap={16}>
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
    </div>
  );
}
