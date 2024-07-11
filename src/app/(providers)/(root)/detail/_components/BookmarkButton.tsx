// src/components/BookmarkButton.tsx
import { useState, useEffect } from 'react';
import { IconBookmark } from '@/icons/IconBookmark';
import { checkBookmark, toggleBookmark } from '@/lib/fetchData';
import { Button } from '@/app/(providers)/(root)/detail/_components/Button';

interface BookmarkButtonProps {
  recipeId: string;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ recipeId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userId = '2a96a3df-867c-4be3-af54-f411dd2634fa'; // 임시 사용자 ID

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      if (userId && recipeId) {
        try {
          const status = await checkBookmark(recipeId, userId);
          setIsBookmarked(status);
        } catch (error) {
          console.error('Error checking bookmark status:', error);
        }
      }
    };

    fetchBookmarkStatus();
  }, [recipeId, userId]);

  const handleBookmark = async () => {
    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      await toggleBookmark(recipeId, userId, isBookmarked);
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  return (
    <Button onClick={handleBookmark}>
      <IconBookmark />
      {isBookmarked ? '해제' : '북마크'}
    </Button>
  );
};

export default BookmarkButton;
