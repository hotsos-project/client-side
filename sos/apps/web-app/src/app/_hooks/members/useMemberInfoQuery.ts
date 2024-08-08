import { useQuery } from '@tanstack/react-query';
import { fetchMemberInfo } from '../../_libs/api/members';

export const useMemberInfoQuery = () => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['memberInfo'],
    queryFn: fetchMemberInfo,
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
