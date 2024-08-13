'use client';

import { Container, TextArea, Button } from '@sos/components-react';
import { vars } from '@sos/style-tokens';

export default function NewSocialPost({ params }: { params: { id: string } }) {
  return (
    <>
      <Container
        display="flex"
        flexDirection="column"
        paddingX={16}
        paddingY={32}
        height={'100dvh'}
        backgroundColor="backgroundNormalPrimary"
      >
        <Container display="flex" flexDirection="column" gap={32}>
          <Container display="flex" justifyContent="space-between">
            <input
              placeholder="제목을 입력하세요."
              style={{
                color: vars.color.$palette.text.normal,
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '25px',
              }}
            />
            <style jsx>{`
              input::placeholder {
                color: ${vars.color.$palette.gray[200]};
                font-size: 20px;
                font-weight: 600;
              }
            `}</style>
          </Container>
          <Button
            type="button"
            icon="photo"
            variant="secondary"
            design="outline"
            iconColor="blue500"
          >
            사진 올리기
          </Button>
        </Container>
        <Container width={'100%'} paddingY={32} height={'100%'}>
          <TextArea />
        </Container>
        <Container paddingY={16}>
          <Button type="submit">등록하기</Button>
        </Container>
      </Container>
    </>
  );
}
