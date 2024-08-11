'use client';

import { Chips, Container } from '@sos/components-react';

export default function FindId() {
  return (
    <>
      <Container display="flex">
        <Chips name="example" value="one" size="m" variant="primary" state="default">
          One
        </Chips>
        <Chips name="example" value="two" size="m" variant="secondary" state="default">
          Two
        </Chips>
        <Chips name="example" value="three" size="m" variant="primary" state="default">
          Three
        </Chips>
      </Container>
    </>
  );
}
