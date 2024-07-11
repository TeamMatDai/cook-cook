'use client';

import React, { useRef, useState } from 'react';
import QuillEditor from './_components/QuillEditor';
import FileInput from './_components/FileInput';
import TimeInput from './_components/TimeInput';
import LevelSelector from './_components/LevelSelector';
import MaterialList from './_components/MaterialList';
import CommonInput from './_components/CommonInput';
import CommentIcon from '../../icons/editor/comment.svg';
import PencilIcon from '../../icons/editor/pencil.svg';
import PhotoIcon from '../../icons/editor/photo.svg';
import Header from './_components/Header';
import { handleSubmit } from './_utils/handleSubmit';

type Level = 'easy' | 'medium' | 'hard';

interface Material {
  name: string;
  value: string;
}

export interface State {
  title: string;
  subtitle: string;
  description: string;
  time: number;
  material: Material[];
  thumbnail: File | null;
  fileName: string;
  level: Level;
  value: string;
}

export const initialState: State = {
  title: '',
  subtitle: '',
  description: '',
  time: 0,
  material: [{ name: '', value: '' }],
  thumbnail: null,
  fileName: '썸네일 이미지를 올려주세요',
  level: 'easy',
  value: ''
};

const EditPage: React.FC = () => {
  const [state, setState] = useState<State>(initialState);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setState({
      ...state,
      thumbnail: file,
      fileName: file ? file.name : '썸네일 이미지를 올려주세요'
    });
  };

  const handleChange = (key: keyof State, value: any) => {
    setState({
      ...state,
      [key]: value
    });
  };

  return (
    <>
      <Header onSubmit={() => handleSubmit(state, setState, fileInputRef)} />
      <section className="flex flex-col ml-5 mr-5 mb-10">
        <CommonInput
          placeholder="제목을 입력하세요"
          value={state.title}
          setValue={(value) => handleChange('title', value)}
          className="h-20 px-3 text-[20px] font-semibold border-b border-gray-300"
        />
        <div className="flex flex-col gap-8 my-8">
          <div className="flex items-center gap-2">
            <CommentIcon />
            <CommonInput
              placeholder="한 줄 설명을 입력하세요"
              value={state.subtitle}
              setValue={(value) => handleChange('subtitle', value)}
              className="w-full px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <PencilIcon />
            <CommonInput
              placeholder="내용을 입력하세요"
              value={state.description}
              setValue={(value) => handleChange('description', value)}
              className="w-full px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <PhotoIcon />
            <FileInput fileName={state.fileName} onChange={handleFileChange} ref={fileInputRef} />
          </div>
        </div>
        <TimeInput time={state.time} setTime={(value) => handleChange('time', value)} />
        <LevelSelector level={state.level} setLevel={(value) => handleChange('level', value)} />
        <MaterialList
          material={state.material}
          setMaterial={(value) => handleChange('material', value)}
        />
        <QuillEditor value={state.value} setValue={(value) => handleChange('value', value)} />
        {/* quill 에디터 하단여백 */}
        <div className="h-14" />
      </section>
    </>
  );
};

export default EditPage;
