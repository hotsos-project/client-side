import { Member } from '@/app/_types';
import { handleApiRequest } from '../client';

export const fetchMemberInfo = async () => {
  return handleApiRequest<Member, 'get'>('/members', 'get');
};
