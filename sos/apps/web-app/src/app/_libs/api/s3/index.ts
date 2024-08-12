import { handleApiRequest } from '../client';
import { ImageResponse, BoardImageRequest, ImageResponses } from '@/app/_types/s3';

// 이미지 업로드 API
export const s3Upload = async (image: File) => {
  const formData = new FormData();
  formData.append('image', image);

  return handleApiRequest<ImageResponse, 'post'>('/s3', 'post', formData, {
    'Content-Type': 'multipart/form-data',
  });
};

// 이미지 삭제 API
export const s3delete = async (addr: string) => {
  return handleApiRequest<void, 'delete'>(`/s3?addr=${encodeURIComponent(addr)}`, 'delete');
};

// 이미지 URL 생성 API
export const generatePresignedUrl = async (saveFileName: string) => {
  return handleApiRequest<string, 'get'>(
    `/s3?saveFileName=${encodeURIComponent(saveFileName)}`,
    'get',
  );
};

// 게시판과 이미지 주소 저장 API
export const saveBoardImage = async (data: BoardImageRequest) => {
  return handleApiRequest<void, 'post'>('/s3/board', 'post', data);
};

// 게시판에 해당하는 이미지 조회 API
export const fetchBoardImage = async (boardId: number) => {
  return handleApiRequest<ImageResponses, 'get'>(`/s3/board/${boardId}`, 'get');
};
