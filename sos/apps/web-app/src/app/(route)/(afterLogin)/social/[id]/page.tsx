'use client';

import { Container, CommentList, SocialContentList, InputGroup } from '@sos/components-react';

export default function SocialDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <Container
        display="flex"
        flexDirection="column"
        gap={16}
        height="100dvh"
        style={{ position: 'relative' }}
      >
        <Container backgroundColor="backgroundNormalPrimary">
          <SocialContentList />
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          backgroundColor="backgroundNormalPrimary"
          style={{ flex: 1, overflowY: 'auto', paddingBottom: '80px' }}
        >
          <CommentList writer="다영영" date="2024.08.11" isReply={false} isWriter={false}>
            좋네요
          </CommentList>
          <CommentList writer="다영일" date="2024.08.11" isReply={true} isWriter={true}>
            222
          </CommentList>
          <CommentList writer="다영이" date="2024.08.11" isReply={false} isWriter={true}>
            전 싫은데요
          </CommentList>
          <CommentList writer="다영삼" date="2024.08.11" isReply={true} isWriter={true}>
            어쩌라구요
          </CommentList>
          <CommentList writer="다영삼" date="2024.08.11" isReply={true} isWriter={true}>
            어쩌라구요
          </CommentList>
          <CommentList writer="다영삼" date="2024.08.11" isReply={true} isWriter={true}>
            어쩌라구요
          </CommentList>
        </Container>
        <Container
          backgroundColor="backgroundNormalPrimary"
          paddingX={16}
          paddingBottom={8}
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        >
          <InputGroup state="default" showLabel={false} buttonText="등록하기" />
        </Container>
      </Container>
    </>
  );
}
