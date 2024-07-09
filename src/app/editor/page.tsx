'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/utils/supabase/supabaseClient';
import QuillEditor from './components/QuillEditor';

const EditPage = () => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('recipes')
      .insert([{ id: uuidv4(), recipe: value }]);

    if (error) {
      console.error('레시피 데이터 삽입 중 오류 발생:', error);
    } else {
      console.log('레시피 데이터 성공적으로 삽입:', data);
      setValue('');
    }
  };

  return (
    <div>
      <h1>EditPage</h1>
      <QuillEditor value={value} setValue={setValue} />
      <button onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default EditPage;
