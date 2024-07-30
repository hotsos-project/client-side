import { Title, Text, Headline } from '@sos/components-react';
import { marginStyle } from './style.css';

export default function Home() {
  return (
    <main>
      <Title color="blue500">안녕하세요</Title>
      <Text className={marginStyle} type="heading1" mode="bold" color="blue500" as="h1">
        hello
      </Text>
      <Headline mainText="Hello" color="blue500" />
    </main>
  );
}
