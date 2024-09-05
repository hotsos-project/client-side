'use client';

import { Container, Title, MessageList } from '@sos/components-react';

export default function EmergencyAlertDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <Container
        display="flex"
        flexDirection="column"
        height="100dvh"
        backgroundColor="backgroundNormalPrimary"
      >
        <Title>재난문자 상세 - ID: {params.id}</Title>
        <MessageList isRead={true} isChecked={true} />
      </Container>
    </>
  );
}
