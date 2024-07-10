'use client';

import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/utils/supabase/supabaseClient';
import QuillEditor from './_components/QuillEditor';
import FileInput from './_components/FileInput';
import TimeInput from './_components/TimeInput';
import LevelSelector from './_components/LevelSelector';
import MaterialList from './_components/MaterialList';
import CommonInput from './_components/CommonInput';
import BackIcon from '../../icons/editor/back.svg';
import CommentIcon from '../../icons/editor/comment.svg';
import PencilIcon from '../../icons/editor/pencil.svg';
import PhotoIcon from '../../icons/editor/photo.svg';

const EditPage = () => {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [material, setMaterial] = useState<{ name: string; value: string }[]>([
    { name: '', value: '' }
  ]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('썸네일 이미지를 올려주세요');
  const [level, setLevel] = useState<string>('쉬움');
  const [value, setValue] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setThumbnail(file);
    setFileName(file ? file.name : '썸네일 이미지를 올려주세요');
  };

  const handleSubmit = async () => {
    let thumbnailUrl = '';

    if (thumbnail) {
      const { data, error } = await supabase.storage
        .from('thumbnails')
        .upload(`thumbnails/${uuidv4()}`, thumbnail);
      if (error) {
        console.error('썸네일 업로드 중 오류 발생:', error);
        return;
      }
      const { data: thumbnailData } = supabase.storage.from('thumbnails').getPublicUrl(data.path);
      thumbnailUrl = thumbnailData.publicUrl;
    }

    const { data, error } = await supabase.from('recipes').insert([
      {
        id: uuidv4(),
        title,
        subtitle,
        description,
        thumbnail: thumbnailUrl,
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
      setFileName('썸네일 이미지를 올려주세요');
    }
  };

  return (
    <>
      <header className="flex gap-5 justify-between items-center border-b border-gray-300 px-6 py-4 font-semibold mb-3">
        <button>
          <BackIcon />
        </button>
        <p>글쓰기</p>
        <button onClick={handleSubmit}>작성</button>
      </header>
      <section className="flex flex-col ml-5 mr-5 mb-10 ">
        <CommonInput
          placeholder="제목을 입력하세요"
          value={title}
          setValue={setTitle}
          className="h-20 px-3 text-[20px] font-semibold border-b border-gray-300"
        />
        <div className="flex flex-col gap-8 my-8">
          <div className="flex items-center gap-2">
            <CommentIcon />
            <CommonInput
              placeholder="한 줄 설명을 입력하세요"
              value={subtitle}
              setValue={setSubtitle}
              className="w-full px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <PencilIcon />
            <CommonInput
              placeholder="내용을 입력하세요"
              value={description}
              setValue={setDescription}
              className="w-full px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <PhotoIcon />
            <FileInput fileName={fileName} onChange={handleFileChange} ref={fileInputRef} />
          </div>
        </div>
        <TimeInput time={time} setTime={setTime} />
        <LevelSelector level={level} setLevel={setLevel} />
        <MaterialList material={material} setMaterial={setMaterial} />
        <QuillEditor value={value} setValue={setValue} />
        {/* quill 에디터 하단여백 */}
        <div className="h-14" />
      </section>
    </>
  );
};

export default EditPage;
