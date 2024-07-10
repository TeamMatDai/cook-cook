import React, { forwardRef } from 'react';

interface FileInputProps {
  fileName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ fileName, onChange }, ref) => (
  <label className="cursor-pointer inline-block">
    {fileName}
    <input type="file" onChange={onChange} ref={ref} className="hidden" />
  </label>
));

export default FileInput;
