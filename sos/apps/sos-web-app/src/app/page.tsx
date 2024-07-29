import { Title, Text } from '@sos/components-react';
import { marginStyle } from './style.css';

export default function Home() {
  return (
    <main>
      <Title>안녕하세요</Title>
      <Text className={marginStyle} type="heading1" mode="bold" color="blue500" as="h1">
        hello
      </Text>
    </main>
  );
}
