'use client';
import { Title, Container, InfoButton } from '@sos/components-react';
import { vars } from '@sos/style-tokens';

export default function Emergency() {
  return (
    <>
      <Title>긴급신고</Title>
      <Container display="flex" flexDirection="column" padding={16} gap={16}>
        <InfoButton
          size="m"
          badgeColor="ghostWhite"
          badgeText="긴급 범죄 신고"
          variant="ghost"
          style={{
            backgroundColor: vars.color.$static.light.blue[800],
          }}
        >
          112
        </InfoButton>
        <InfoButton
          size="m"
          badgeColor="ghostWhite"
          badgeText="화재 · 구조 · 구급 신고"
          variant="ghost"
          style={{
            backgroundColor: vars.color.$static.light.pink[700],
          }}
        >
          119
        </InfoButton>
        <InfoButton size="m" badgeText="그 외 모든 민원 상담">
          110
        </InfoButton>
      </Container>
    </>
  );
}
