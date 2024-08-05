'use client';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import { Button, InputGroup, Container } from '@sos/components-react';
import { useAuth } from '@/app/_hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [loginId, setloginId] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useAuth();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    console.log(loginId, password);
    try {
      await mutation.mutate({ loginId, password });
      router.push('/');
    } catch (error) {
      console.log('❌ Login Failed', error);
    }
  };

  const onChangeloginId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setloginId(e.target.value.trim());
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value.trim());
  };
  return (
    <Container
      as="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100dvw"
      height="100dvh"
      onSubmit={handleSubmit}
    >
      <Container display="flex" flexDirection="column" padding={16} gap={24}>
        <InputGroup
          onChange={onChangeloginId}
          state="default"
          showButton={false}
          labelContent="아이디"
        ></InputGroup>
        <InputGroup
          onChange={onChangePassword}
          state="default"
          showButton={false}
          labelContent="비밀번호"
        ></InputGroup>
      </Container>
      <Container paddingX={16} paddingY={36}>
        <Button size="l" />
      </Container>
    </Container>
  );
}
