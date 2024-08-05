import { useQuery } from '@tanstack/react-query';
import { fetchUserInfo } from '@/app/_lib/apiCalls';

export const useUserInfo = () => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
    retry: false,
  });
};
