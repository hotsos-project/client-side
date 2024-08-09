import { useMutation } from '@tanstack/react-query';
import { updateReply } from '@/app/_libs';
import { handleSuccess, handleError } from '@/app/_libs';
import { UpdateReplyVariables } from '@/app/_types';

export const useUpdateReply = () => {
  return useMutation<Record<string, never>, Error, UpdateReplyVariables>({
    mutationFn: ({ replyId, data }) => updateReply(replyId, data),
    onSuccess: (data) => {
      handleSuccess('✅ Reply updated successfully', data);
    },
    onError: (error) => {
      handleError('😥 Failed to update reply', error);
    },
  });
};
