'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import IconBookmark from '@/icons/bookmark.svg';
import { addBookmark, checkBookmark, removeBookmark } from '@/services/bookmark';
import showSwal from '@/utils/swal';
import Loader from '../_components/Loader';
import ErrorPage from '../_components/ErrorPage';
import useBookmark from '@/hooks/queries/useBookmark';
import useShallowSelector from '@/hooks/useShallowSelector';
import { AuthStoreTypes, UserType } from '@/stores/authStore';
import { useAuthStore } from '@/providers/AuthStoreProvider';
import type { User } from '@supabase/supabase-js';
interface BookmarkButtonProps {
  recipesId: string;
}

type UserIdType = {
  userId: User['id'];
};
const BookmarkButton = ({ recipesId }: BookmarkButtonProps) => {
  const { userId } = useShallowSelector<AuthStoreTypes, UserIdType>(useAuthStore, ({ user }) => ({
    userId: user?.id || ''
  }));

  const { isBookmarked, isLoading, error, addBookmark, removeBookmark } = useBookmark(
    recipesId,
    userId
  );

  const handleBookmark = async () => {
    if (!userId) {
      showSwal({ icon: 'warning', title: '로그인이 필요합니다.' });
      return;
    }

    if (isBookmarked) {
      removeBookmark();
      return;
    }
    addBookmark();
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage message={'북마크 에러가 발생하였습니다.'} />;

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
