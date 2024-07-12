import React, { forwardRef } from 'react';

interface FileInputProps {
  fileName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ fileName, onChange }, ref) => (
  <label className="cursor-pointer inline-block px-2">
    <span className="text-[#9CA3B7]">{fileName}</span>
    <input type="file" onChange={onChange} ref={ref} className="hidden" />
  </label>
));

export default FileInput;
