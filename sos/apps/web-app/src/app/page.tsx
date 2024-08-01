import { SocialContentList } from '@sos/components-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <SocialContentList>
        <Image src="/earthquake3-01.jpg" width={100} height={100} size="responsive" />
      </SocialContentList>
    </main>
  );
}
