import { IconBookmark } from '@/icons/IconBookmark';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addBookmark, checkBookmark, removeBookmark } from '@/lib/fetchData';
interface BookmarkButtonProps {
  recipesId: string;
}

// TODO: 북마크기능 로직 리펙토링 필요
const BookmarkButton: React.FC<BookmarkButtonProps> = ({ recipesId }) => {
  // const [isBookmarked, setIsBookmarked] = useState(false);
  const userId = '2a96a3df-867c-4be3-af54-f411dd2634fa'; // 임시 사용자 ID
  const queryClient = useQueryClient();

  const { data: isBookmarked, isLoading, error } = useQuery({
    queryKey: ['bookmark', recipesId, userId],
    queryFn: () => checkBookmark(recipesId, userId),
    enabled: !!recipesId && !!userId,
  });

  const addBookmarkMutation = useMutation({
    mutationFn: () => addBookmark(recipesId, userId),
    onMutate: async () => {
      await queryClient.cancelQueries(['bookmark', recipesId, userId]);

      const previousBookmark = queryClient.getQueryData<boolean>(['bookmark', recipesId, userId]);

      queryClient.setQueryData(['bookmark', recipesId, userId], true);

      return { previousBookmark };
    },
    onError: (err, newBookmark, context: any) => {
      if (context?.previousBookmark) {
        queryClient.setQueryData(['bookmark', recipesId, userId], context.previousBookmark);
      }
      console.error('@@ADD BOOKMARK ERROR:', err);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['bookmark', recipesId, userId]);
    },
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: () => removeBookmark(recipesId, userId),
    onMutate: async () => {
      await queryClient.cancelQueries(['bookmark', recipesId, userId]);

      const previousBookmark = queryClient.getQueryData<boolean>(['bookmark', recipesId, userId]);

      queryClient.setQueryData(['bookmark', recipesId, userId], false);

      return { previousBookmark };
    },
    onError: (err, newBookmark, context: any) => {
      if (context?.previousBookmark) {
        queryClient.setQueryData(['bookmark', recipesId, userId], context.previousBookmark);
      }
      console.error('@@REMOVE BOOKMARK ERROR:', err);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['bookmark', recipesId, userId]);
    },
  });

  const handleBookmark = async () => {
    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (isBookmarked) {
      removeBookmarkMutation.mutate();
    } else {
      addBookmarkMutation.mutate();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookmark status</div>;


  // useEffect(() => {
  //   const fetchBookmarkStatus = async () => {
  //     if (userId && recipeId) {
  //       try {
  //         const status = await checkBookmark(recipeId, userId);
  //         setIsBookmarked(status);
  //       } catch (error) {
  //         console.error('@@BOOKMARK STATUS ERROR:', error);
  //       }
  //     }
  //   };
  //
  //   fetchBookmarkStatus();
  // }, [recipeId, userId]);
  //
  // const handleBookmark = async () => {
  //   if (!userId) {
  //     alert('로그인이 필요합니다.');
  //     return;
  //   }
  //   try {
  //     await toggleBookmark(recipeId, userId, isBookmarked);
  //     setIsBookmarked(!isBookmarked);
  //   } catch (error) {
  //     console.error('@@BOOKMARK TOGGLE ERROR:', error);
  //   }
  // };

  return (
    // TODO: 북마크 버튼 스타일링 필요
    <button className='rounded-lg w-[66px] h-[66px] flex flex-col gap-2 justify-center items-center border border-lightgray' onClick={handleBookmark}>
      <IconBookmark />
      {isBookmarked ? '해제' : '북마크'}
    </button>
  );
};

export default BookmarkButton;
