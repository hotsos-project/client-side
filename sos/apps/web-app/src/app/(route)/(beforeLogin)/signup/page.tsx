'use client';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import { Button, InputGroup, Container } from '@sos/components-react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [nickname, setNickname] = useState('');
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(newId, newPassword, confirmNewPassword, newPhoneNumber, nickname);
    router.push('/');
  };

  // 휴대폰 번호 입력시 formatting
  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 8) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleChangePhoneNumber: ChangeEventHandler<HTMLInputElement> = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewPhoneNumber(formattedPhoneNumber);
  };

  return (
    <>
      <Container
        as="form"
        display="flex"
        flexDirection="column"
        paddingX={16}
        paddingY={56}
        gap={16}
        onSubmit={handleSubmit}
      >
        <InputGroup
          state="default"
          placeholder="아이디를 입력하세요"
          showLabel={true}
          labelContent="아이디"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
        />
        <InputGroup
          state="default"
          placeholder="숫자, 특수문자를 포함한 8자 이상"
          type="password"
          showLabel={true}
          showButton={false}
          labelContent="비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputGroup
          state="default"
          placeholder="비밀번호를 입력하세요"
          type="password"
          showLabel={true}
          showButton={false}
          labelContent="비밀번호 확인"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <InputGroup
          state="default"
          placeholder="휴대폰 번호를 입력하세요"
          showLabel={true}
          showButton={false}
          labelContent="휴대전화"
          value={newPhoneNumber}
          onChange={handleChangePhoneNumber}
        />
        <InputGroup
          state="default"
          placeholder="닉네임을 입력하세요"
          showLabel={true}
          showButton={false}
          labelContent="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Container display="flex" paddingTop={56}>
          <Button mainText="시작하기" />
        </Container>
      </Container>
    </>
  );
}
