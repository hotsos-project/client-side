import { useQuery } from '@tanstack/react-query';
import { fetchBoardImage } from '@/app/_libs';

export const useFetchBoardImage = (boardId: number) => {
  const isClient = typeof window !== 'undefined';

  return useQuery({
    queryKey: ['boardImage', boardId],
    queryFn: () => fetchBoardImage(boardId),
    enabled: isClient ? !!localStorage.getItem('accessToken') : false,
  });
};
