import { useMutation } from '@tanstack/react-query';
import { deleteReply } from '@/app/_libs/api/replies';
import { handleSuccess, handleError } from '@/app/_libs';
import { AxiosError } from 'axios';

export const useDeleteReply = () => {
  return useMutation<Record<string, never>, AxiosError, number>({
    mutationFn: (replyId: number) => deleteReply(replyId),
    onSuccess: (data) => {
      handleSuccess('✅ Reply deleted successfully', data);
    },
    onError: (error) => {
      handleError('😥 Failed to delete reply', error);
    },
  });
};
