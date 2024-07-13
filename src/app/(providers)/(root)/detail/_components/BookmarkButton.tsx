'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import IconBookmark from '@/icons/bookmark.svg';
import { addBookmark, checkBookmark, removeBookmark } from '@/services/bookmark';
import showSwal from '@/utils/swal';
import Loader from '../_components/Loader';
import ErrorPage from '../_components/ErrorPage';
interface BookmarkButtonProps {
  recipesId: string;
}

// TODO: 북마크기능 로직 리펙토링 필요
const BookmarkButton = ({ recipesId }: BookmarkButtonProps) => {
  const userId = '6619b5b3-4fcc-4b55-a9c9-2bd7688b8614'; // 임시 사용자 ID
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
      showSwal({ icon: 'warning', title: '북마크 추가 에러' });
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
      showSwal({ icon: 'warning', title: '북마크 해제 에러' });

    },
    onSettled: () => {
      queryClient.invalidateQueries(['bookmark', recipesId]);
    }
  });

  const handleBookmark = async () => {
    if (!userId) {
      showSwal({ icon: 'warning', title: '로그인이 필요합니다.' });
      return;
    }

    if (isBookmarked) {
      removeBookmarkMutation.mutate();
      return;
    }
    addBookmarkMutation.mutate();
  };

  if (isLoading) return <Loader/>;
  if (error) return <ErrorPage message={'북마크 에러가 발생하였습니다.'}/>;

  return (
    <button
      className={`rounded-lg w-[66px] h-[66px] flex flex-col gap-2 justify-center items-center border ${
        isBookmarked ? 'text-black border-black' : 'border-lightgray'
      }`}
      onClick={handleBookmark}
    >
      <IconBookmark className={`${isBookmarked && 'text-black fill-current'}`} />
      {isBookmarked ? '해제' : '북마크'}
    </button>
  );
};

export default BookmarkButton;
