'use client';

import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/utils/supabase/supabaseClient';
import QuillEditor from './components/QuillEditor';
import FileInput from './components/FileInput';
import TimeInput from './components/TimeInput';
import LevelSelector from './components/LevelSelector';
import MaterialList from './components/MaterialList';
import CommonInput from './components/CommonInput';

const EditPage = () => {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [material, setMaterial] = useState<{ name: string; value: string }[]>([
    { name: '', value: '' }
  ]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('썸네일을 첨부해주세요');
  const [level, setLevel] = useState<string>('쉬움');
  const [value, setValue] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setThumbnail(file);
    setFileName(file ? file.name : '썸네일을 첨부해주세요');
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase.from('recipes').insert([
      {
        id: uuidv4(),
        title,
        subtitle,
        description,
        thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : '',
        recipe: value,
        time,
        level,
        material
      }
    ]);

    if (error) {
      console.error('레시피 데이터 삽입 중 오류 발생:', error);
    } else {
      console.log('레시피 데이터 성공적으로 삽입:', data);
      setTitle('');
      setSubtitle('');
      setDescription('');
      setThumbnail(null);
      setValue('');
      setTime(0);
      setLevel('쉬움');
      setMaterial([{ name: '', value: '' }]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setFileName('썸네일을 첨부해주세요');
    }
  };

  return (
    <div>
      <CommonInput placeholder="제목을 입력하세요" value={title} setValue={setTitle} />
      <CommonInput placeholder="한줄설명을 입력하세요" value={subtitle} setValue={setSubtitle} />
      <CommonInput placeholder="내용을 입력하세요" value={description} setValue={setDescription} />
      <FileInput fileName={fileName} onChange={handleFileChange} ref={fileInputRef} />
      <TimeInput time={time} setTime={setTime} />
      <LevelSelector level={level} setLevel={setLevel} />
      <MaterialList material={material} setMaterial={setMaterial} />
      <QuillEditor value={value} setValue={setValue} />
      <button onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default EditPage;
