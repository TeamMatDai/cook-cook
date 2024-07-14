import { forwardRef } from 'react';

interface FileInputProps {
  fileName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ fileName, onChange }, ref) => (
  <label className="cursor-pointer inline-block px-2">
    <span className="text-[#999999]">{fileName}</span>
    <input type="file" onChange={onChange} ref={ref} className="hidden" />
  </label>
));

FileInput.displayName = 'FileInput';

export default FileInput;
