'use client';

import { useEffect, useRef, useState } from 'react';
import QuillEditor from './_components/QuillEditor';
import FileInput from './_components/FileInput';
import TimeInput from './_components/TimeInput';
import LevelSelector from './_components/LevelSelector';
import MaterialList from './_components/MaterialList';
import CommonInput from './_components/CommonInput';
import CommentIcon from '@/icons/editor/comment.svg';
import PencilIcon from '@/icons/editor/pencil.svg';
import PhotoIcon from '@/icons/editor/photo.svg';
import Header from './_components/Header';
import { handleSubmit } from './_utils/handleSubmit';
import { Recipe } from '@/types/recipe';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/providers/AuthStoreProvider';
import showSwal from '@/utils/swal';
import { INITIAL_STATE } from './_utils/constants';

const EditPage = () => {
  const [state, setState] = useState<Recipe>(INITIAL_STATE);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setState((prevState) => ({
      ...prevState,
      thumbnail: file,
      fileName: file ? file.name : '썸네일 이미지를 올려주세요'
    }));
  };

  useEffect(() => {
    if (!user) {
      showSwal({ icon: 'warning', title: '로그인이 필요한 페이지입니다.' });
      router.push('/login');
    }
  }, [router, user]);

  const handleChange = <K extends keyof Recipe>(
    key: K,
    value: Recipe[K] | ((prev: Recipe[K]) => Recipe[K])
  ) => {
    setState((prevState) => ({
      ...prevState,
      [key]: typeof value === 'function' ? value(prevState[key]) : value
    }));
  };

  return (
    <>
      <Header onSubmit={() => handleSubmit({ state, setState, fileInputRef, router })} />
      <section className="flex flex-col ml-5 mr-5 mb-10">
        <CommonInput
          placeholder="제목을 입력하세요"
          value={state.title}
          setValue={(value) => handleChange('title', value)}
          className="h-20 px-3 text-[20px] font-semibold border-b #f0f0f0"
        />
        <div className="flex flex-col my-8">
          <div className="flex items-center gap-2">
            <CommentIcon />
            <CommonInput
              placeholder="한 줄 설명을 입력하세요"
              value={state.subtitle}
              setValue={(value) => handleChange('subtitle', value)}
              className="h-16 w-full px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <PencilIcon />
            <CommonInput
              placeholder="내용을 입력하세요"
              value={state.description}
              setValue={(value) => handleChange('description', value)}
              className="h-16 w-full px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-2 h-16">
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
        <div className="h-14" />
      </section>
    </>
  );
};

export default EditPage;
