import { InfoButton, Container } from '@sos/components-react';

export default function Home() {
  return (
    <main>
      <Container display="flex" gap={16} paddingX={16} paddingY={8}>
        <InfoButton variant="default" size="s" badgeText="폭우" mainText="아빠" subText="안전" />
        <InfoButton variant="danger" size="s" badgeText="폭우" mainText="아빠" subText="안전" />
        <InfoButton variant="warning" size="s" badgeText="폭우" mainText="아빠" subText="안전" />
      </Container>
    </main>
  );
}
