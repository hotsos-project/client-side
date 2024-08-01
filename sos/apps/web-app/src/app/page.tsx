import { InfoBox } from '@sos/components-react';

const infos = [
  {
    title: '가응 시간',
    content: '9:00 ~ 18:00',
  },
  { title: '설치 장소', content: '진료실' },
];

export default function Home() {
  return (
    <main>
      <InfoBox infos={infos} backgroundColor="backgroundElevatedSecondary" />
    </main>
  );
}
