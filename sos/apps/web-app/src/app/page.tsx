import { Title, Text, Headline, Container } from '@sos/components-react';
import { marginStyle } from './style.css';

export default function Home() {
  return (
    <main>
      <Title color="blue500">안녕하세요</Title>
      <Text className={marginStyle} textType="heading1" textMode="bold" color="blue500" as="h1">
        hello
      </Text>
      <Headline mainText="Hello" color="blue500" />
      <Container as="div" padding={10} backgroundColor="blue100" display="flex" justifyContent="center" gap={10}>
        <Text className={marginStyle} textType="heading1" textMode="bold" color="blue500" as="h1">
          hello
        </Text>
        <Text className={marginStyle} textType="heading1" textMode="bold" color="blue500" as="h1">
          hello
        </Text>
      </Container>
      <hr />
    </main>
  );
}
