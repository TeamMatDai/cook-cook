import { supabase } from '@/utils/supabase/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import showSwal from '@/utils/swal';
import { Recipe } from '@/types/recipe';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { INITIAL_STATE } from './constants';

interface handleSubmitProps {
  state: Recipe;
  setState: React.Dispatch<React.SetStateAction<Recipe>>;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  router: AppRouterInstance;
}

export const handleSubmit = async ({
  state,
  setState,
  fileInputRef,
  router
}: handleSubmitProps) => {
  // const router = useRouter();

  if (
    state.title.trim() === '' ||
    state.subtitle.trim() === '' ||
    state.description.trim() === '' ||
    state.value.trim() === '' ||
    state.material.some((item) => item.name.trim() === '' || item.value.trim() === '')
  ) {
    showSwal({ icon: 'warning', title: '모든 입력칸을 작성해주세요.' });
    return;
  }

  if (!state.thumbnail) {
    showSwal({ icon: 'warning', title: '썸네일을 업로드 해주세요.' });
    return;
  }

  let thumbnailUrl = '';

  if (state.thumbnail) {
    const { data, error } = await supabase.storage
      .from('thumbnails')
      .upload(`thumbnails/${uuidv4()}`, state.thumbnail);
    if (error) {
      console.error('썸네일 업로드 중 오류 발생:', error);
      return;
    }
    const { data: thumbnailData } = supabase.storage.from('thumbnails').getPublicUrl(data.path);
    thumbnailUrl = thumbnailData.publicUrl;
  }

  const { error } = await supabase.from('recipes').insert([
    {
      title: state.title,
      subtitle: state.subtitle,
      description: state.description,
      thumbnail: thumbnailUrl,
      recipe: state.value,
      time: state.time,
      level: state.level,
      material: state.material
    }
  ]);

  if (error) {
    console.error('레시피 데이터 삽입 중 오류 발생:', error);
    return;
  }
  showSwal({ icon: 'success', title: '레시피 작성이 완료되었습니다!' });
  setState(INITIAL_STATE);
  if (fileInputRef.current) {
    fileInputRef.current.value = '';
  }

  router.push('/');
};
