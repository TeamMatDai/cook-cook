import { supabase } from '@/utils/supabase/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { INITIALSTATE } from '../page';
import { State } from '../_types/editorInput';

interface handleSubmitProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
}

export const handleSubmit = async ({ state, setState, fileInputRef }: handleSubmitProps) => {
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
      material: state.material.map((item) => JSON.stringify(item))
    }
  ]);

  if (error) {
    console.error('레시피 데이터 삽입 중 오류 발생:', error);
    return;
  }

  setState(INITIALSTATE);
  if (fileInputRef.current) {
    fileInputRef.current.value = '';
  }
};
