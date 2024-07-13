import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addBookmark, checkBookmark, removeBookmark } from '@/services/bookmark';
import showSwal from '@/utils/swal';

const useBookmark = (recipesId: string, userId: string) => {
  const queryClient = useQueryClient();

  const {
    data: isBookmarked,
    isLoading,
    error
  } = useQuery({
    queryKey: ['bookmark', recipesId],
    queryFn: () => checkBookmark(recipesId, userId),
    enabled: !!recipesId && !!userId
  });

  const addBookmarkMutation = useMutation({
    mutationFn: () => addBookmark(recipesId, userId),
    onMutate: async () => {
      await queryClient.cancelQueries(['bookmark', recipesId]);

      const previousBookmark = queryClient.getQueryData<boolean>(['bookmark', recipesId]);

      queryClient.setQueryData(['bookmark', recipesId], true);

      return { previousBookmark };
    },
    onError: (err, newBookmark, context: any) => {
      if (context?.previousBookmark) {
        queryClient.setQueryData(['bookmark', recipesId], context.previousBookmark);
      }
      showSwal({ icon: 'warning', title: '북마크 추가 에러가 발생했습니다.' });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['bookmark', recipesId]);
    }
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: () => removeBookmark(recipesId, userId),
    onMutate: async () => {
      await queryClient.cancelQueries(['bookmark', recipesId]);

      const previousBookmark = queryClient.getQueryData<boolean>(['bookmark', recipesId]);

      queryClient.setQueryData(['bookmark', recipesId], false);

      return { previousBookmark };
    },
    onError: (err, newBookmark, context: any) => {
      if (context?.previousBookmark) return;
      queryClient.setQueryData(['bookmark', recipesId], context.previousBookmark);
      showSwal({ icon: 'warning', title: '북마크 해제 에러가 발생했습니다.' });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['bookmark', recipesId]);
    }
  });
  return {
    isBookmarked,
    isLoading,
    error,
    addBookmark: addBookmarkMutation.mutate,
    removeBookmark: removeBookmarkMutation.mutate
  };
};
export default useBookmark;
