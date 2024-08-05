import { useQuery } from '@tanstack/react-query';
import { fetchSidos } from '../_lib/apiCalls';

export const useSidos = () => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['sidos'],
    queryFn: fetchSidos,
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
    retry: false,
  });
};
