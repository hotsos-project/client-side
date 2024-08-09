'use client';

import { DropDownBox, Container } from '@sos/components-react';

export default function FindId() {
  const options = ['option1', 'option2', 'option3'];
  return (
    <>
      <DropDownBox options={options} />
    </>
  );
}
