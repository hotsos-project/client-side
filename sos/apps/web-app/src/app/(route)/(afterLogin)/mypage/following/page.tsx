'use client';

import { useState } from 'react';
import { FollowingList, Container } from '@sos/components-react';

interface FollowingData {
  nickName: string;
  name: string;
}

export default function Following() {
  const [followingData, setFollowingData] = useState<FollowingData[]>([
    { nickName: 'nickName1', name: 'name1' },
    { nickName: 'nickName2', name: 'name2' },
    { nickName: 'nickName3', name: 'name3' },
    { nickName: 'nickName4', name: 'name4' },
  ]);

  const handleDelete = (nickNameToDelete: string) => {
    setFollowingData((prevData) =>
      prevData.filter((follow) => follow.nickName !== nickNameToDelete),
    );
  };

  return (
    <Container display="flex" flexDirection="column" padding={16} gap={16}>
      {followingData.map((follow, index) => (
        <FollowingList
          key={index}
          nickName={follow.nickName}
          name={follow.name}
          onDelete={() => handleDelete(follow.nickName)}
        ></FollowingList>
      ))}
    </Container>
  );
}
