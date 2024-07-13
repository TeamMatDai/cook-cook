import { createClient } from '@/utils/supabase/supabaseClient';
import { Bookmark } from '@/types/bookmark';




// export const toggleBookmark = async (recipesId: string, userId: string, isBookmarked: boolean) => {
//   if (isBookmarked) {
//     const { error } = await supabase
//       .from('bookmark')
//       .delete()
//       .eq('recipesId', recipesId)
//       .eq('userId', userId);
//
//     if (error) throw new Error(error.message);
//   } else {
//     const { error } = await supabase
//       .from('bookmark')
//       .insert([{ recipesId, userId }]);
//
//     if (error) throw new Error(error.message);
//   }
// };