import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { supabase } from '@/utils/supabase/supabaseClient';
import ReactQuill, { ReactQuillProps } from 'react-quill';

interface QuillEditorProps {
  value: string;
  setValue: (value: string) => void;
}

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const ReactQuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return function Quill({ forwardedRef, ...props }: ForwardedQuillComponent) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false, loading: () => <p>Loading ...</p> }
);

const handleImage = async (quillRef: React.RefObject<ReactQuill>) => {
  console.log('에디터에서 이미지버튼 클릭');

  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.addEventListener('change', async () => {
    if (input.files) {
      const file = input.files[0];
      const fileNewName = uuidv4();

      const { data, error } = await supabase.storage
        .from('quillImgs')
        .upload(`quill_imgs/${fileNewName}`, file);
      if (error) {
        console.error('이미지 업로드 중 오류 발생:', error);
      } else {
        console.log('이미지가 성공적으로 업로드되었습니다:', data);

        const response = supabase.storage
          .from('quillImgs')
          .getPublicUrl(`quill_imgs/${fileNewName}`);

        if (response.data) {
          const postImageUrl = response.data.publicUrl;
          const editor = quillRef.current!.getEditor();
          const range = editor.getSelection();

          if (range) {
            // 삽입한 이미지 다음으로 커서 옮기기
            editor.insertEmbed(range.index, 'image', postImageUrl);
            editor.setSelection(range.index + 1, 0);
            editor.insertText(range.index + 1, '\n');
          } else {
            console.error('No selection range found.');
          }
        } else {
          console.error('No public URL found in response data.');
        }
      }
    }
  });
};

const QuillEditor: React.FC<QuillEditorProps> = ({ value, setValue }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const modules = React.useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          [{ align: [] }, { color: [] }, { background: [] }],
          ['clean']
        ],
        handlers: {
          image: () => handleImage(quillRef)
        }
      }
    }),
    []
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background'
  ];

  return (
    <>
      <p>레시피</p>
      <ReactQuillWrapper
        forwardedRef={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="나만의 레시피를 작성해주세요!"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default QuillEditor;
