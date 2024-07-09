'use client';

import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/utils/supabase/supabaseClient';
import QuillEditor from './components/QuillEditor';

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

  const handleFileChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setThumbnail(file);
    setFileName(file ? file.name : '썸네일을 첨부해주세요');
  };

  const handleMaterialChange = (index: number, field: string, value: string) => {
    const newMaterial = [...material];
    newMaterial[index] = { ...newMaterial[index], [field]: value };
    setMaterial(newMaterial);
  };

  const addMaterial = () => {
    setMaterial([...material, { name: '', value: '' }]);
  };

  const handleMaterialDelete = (index: number) => {
    if (material.length > 1) {
      const deleteMaterial = material.filter((_, i) => i !== index);
      setMaterial(deleteMaterial);
    }
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
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="한줄설명을 입력하세요"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="cursor-pointer inline-block">
        {fileName}
        <input type="file" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
      </label>
      <p>소요시간</p>
      <div className="flex items-center">
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="border border-gray-300 p-1 w-20"
        />
        <p>분</p>
      </div>
      <p>난이도</p>
      <div>
        <button
          onClick={() => setLevel('쉬움')}
          style={{ backgroundColor: level === '쉬움' ? 'gray' : 'white' }}
        >
          쉬움
        </button>
        <button
          onClick={() => setLevel('보통')}
          style={{ backgroundColor: level === '보통' ? 'gray' : 'white' }}
        >
          보통
        </button>
        <button
          onClick={() => setLevel('어려움')}
          style={{ backgroundColor: level === '어려움' ? 'gray' : 'white' }}
        >
          어려움
        </button>
      </div>
      <p>기본재료</p>
      {material.map((materials, index) => (
        <div key={index} className="flex items-center">
          <input
            type="text"
            placeholder="재료 이름"
            value={materials.name}
            onChange={(e) => handleMaterialChange(index, 'name', e.target.value)}
            className="border border-gray-300 p-1 mr-2"
          />
          <input
            type="text"
            placeholder="재료 설명"
            value={materials.value}
            onChange={(e) => handleMaterialChange(index, 'value', e.target.value)}
            className="border border-gray-300 p-1"
          />
          {material.length > 1 && <button onClick={() => handleMaterialDelete(index)}>삭제</button>}
        </div>
      ))}
      <button onClick={addMaterial}>재료 추가하기</button>
      <p>레시피</p>
      <QuillEditor value={value} setValue={setValue} />
      <button onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default EditPage;
