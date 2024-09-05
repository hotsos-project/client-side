'use client';

import { Container, Chips, Divider, MessageList } from '@sos/components-react';
import { useRouter } from 'next/navigation';

export default function EmergencyAlert() {
  const router = useRouter();
  const routeToPage = (route: string) => {
    router.push(route);
  };
  return (
    <>
      <Container display="flex" paddingX={16} paddingY={12} gap={8}>
        <Chips size="l" variant="secondary" state="outline" content="전체보기" />
        <Divider orientation="vertical" />
        <Chips size="l" variant="secondary" state="outline" content="엄마" />
        <Chips size="l" variant="secondary" state="outline" content="아빠" />
        <Chips size="l" variant="secondary" state="outline" content="누나" />
      </Container>
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        isRead={true}
        isChecked={true}
        variant="danger"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
      <MessageList
        title="[호우] 전북특별자치도 진안군"
        onClick={() => {
          routeToPage('/emergency-alert/1');
        }}
      />
    </>
  );
}
