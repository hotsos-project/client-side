'use client';

import { MapBottomSheet, Container } from '@sos/components-react';

export default function MyPage() {
  const infos = [
    { title: '가응 시간', content: '9:00 ~ 18:00' },
    { title: '설치 장소', content: '진료실' },
  ];
  return (
    <div>
      <Container display="flex" width="100dvw" padding={16}>
        <MapBottomSheet
          title="신동보건지소"
          badgeText="심장충격기"
          subText="서울시 무슨구 신동면 중리"
          infos={infos}
          subButtonIcon="phone"
          buttonText="길찾기"
          badgeColor="pink"
        />
      </Container>
      <h1>마이페이지</h1>
    </div>
  );
}
