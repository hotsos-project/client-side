import { AxiosError } from 'axios';

// 성공 처리 함수
export const handleSuccess = <T>(message: string, data: T) => {
  console.log(`%c${message}`, 'background: lightgreen; color: black; font-weight: bold;', data);
};

// 오류 처리 함수
export const handleError = (message: string, error: Error | AxiosError) => {
  console.error(
    `%c${message}`,
    'color: black; background-color: lightsalmon; font-weight: bold;',
    error,
  );
};
