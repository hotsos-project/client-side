import { Block, Text } from '@sos/components-react';
import { marginStyle } from './style.css';

export default function Home() {
  return (
    <main>
      <Block />
      <Text
        className={marginStyle}
        type="heading1"
        mode="bold"
        color="blue500"
        as="h1"
      >
        hello
      </Text>
    </main>
  );
}
