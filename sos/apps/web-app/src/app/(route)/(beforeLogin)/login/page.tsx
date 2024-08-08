'use client';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import { Button, InputGroup, Container, Text, Divider } from '@sos/components-react';
import { useLogin } from '@/app/_hooks';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [loginId, setloginId] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useLogin();
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
    <>
      <Container
        display="flex"
        flexDirection="column"
        height={'100dvh'}
        style={{ position: 'relative' }}
      >
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ position: 'absolute', width: '100%', height: '20rem' }}
        >
          <Text textType="display2" textMode="bold" color="uiPrimaryNormal">
            {'긴급 재난 알림'}
          </Text>
        </Container>
        <Container
          as="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100dvw"
          height="100%"
          onSubmit={handleSubmit}
        >
          <Container display="flex" flexDirection="column" paddingX={16} gap={24}>
            <InputGroup
              onChange={onChangeloginId}
              state="default"
              placeholder="아이디"
              showButton={false}
              labelContent="아이디"
            ></InputGroup>
            <InputGroup
              onChange={onChangePassword}
              state="default"
              placeholder="******"
              showButton={false}
              labelContent="비밀번호"
              type="password"
            ></InputGroup>
          </Container>
          <Container paddingX={16} paddingY={36}>
            <Button size="l">로그인</Button>
          </Container>
          <Container display="flex" justifyContent="center" paddingX={16} gap={10}>
            <Link href="/signup" passHref>
              <Text>{'회원가입'}</Text>
            </Link>
            <Divider orientation="vertical" color="textNormal" />
            <Link href="/login/find-id" passHref>
              <Text>{'계정찾기'}</Text>
            </Link>
          </Container>
        </Container>
      </Container>
    </>
  );
}
