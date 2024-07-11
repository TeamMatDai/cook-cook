import React, { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import { handleImage } from '../_utils/handleImage';
import { FORMATS } from '../_utils/constants';

interface QuillEditorProps {
  value: string;
  setValue: (value: string) => void;
}
interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const DynamicReactQuill = dynamic(
  async () => {
    const { default: ReactQuill } = await import('react-quill');
    return ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <ReactQuill ref={forwardedRef} {...props} />
    );
  },
  { ssr: false, loading: () => <p>Loading ...</p> }
);

const QuillEditor = ({ value, setValue }: QuillEditorProps) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const modules = React.useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'underline', 'blockquote', 'link', 'image'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: [] }, { color: [] }, { background: [] }]
        ],
        handlers: {
          image: () => handleImage(quillRef)
        }
      }
    }),
    []
  );

  return (
    <>
      <p className="w-[60px] h-[18px] font-semibold mt-7 mb-4">레시피</p>
      <DynamicReactQuill
        forwardedRef={quillRef}
        theme="snow"
        modules={modules}
        formats={FORMATS}
        placeholder="나만의 레시피를 작성해주세요!"
        value={value}
        onChange={setValue}
        className="h-96"
      />
    </>
  );
};

export default QuillEditor;
