'use client';

import { DropDownBox } from '@sos/components-react';

export default function FindId() {
  const options = ['option1', 'option2', 'option3', 'option4'];
  return (
    <>
      <DropDownBox options={options} />
    </>
  );
}
