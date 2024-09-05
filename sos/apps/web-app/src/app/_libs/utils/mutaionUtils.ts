import { AxiosError } from 'axios';

// 성공 처리 함수
export const handleSuccess = <T>(message: string, data: T) => {
  if (
    data &&
    !(typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length === 0)
  ) {
    console.log(`%c${message}`, 'background: lightgreen; color: black; font-weight: bold;', data);
  } else {
    console.log(`%c${message}`, 'background: lightgreen; color: black; font-weight: bold;');
  }
};

// 오류 처리 함수
export const handleError = (message: string, error: Error | AxiosError) => {
  console.error(
    `%c${message}`,
    'color: black; background-color: lightsalmon; font-weight: bold;',
    error,
  );
};
