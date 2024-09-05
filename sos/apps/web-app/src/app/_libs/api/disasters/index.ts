import { DisasterResponses } from '@/app/_types/disasters';
import { handleApiRequest } from '../client';

// 모든 재난 조회 API
export const fetchAllDisasters = async () => {
  return handleApiRequest<DisasterResponses, 'get'>('/disasters', 'get');
};

// 지역별 재난 조회 API
export const fetchDisastersByLocation = async (location: string) => {
  return handleApiRequest<DisasterResponses, 'get'>(`/disasters/${location}`, 'get');
};
