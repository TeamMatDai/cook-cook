interface CommonInputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

const CommonInput = ({ placeholder, value, setValue, className }: CommonInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`common-input-styles placeholder:text-[#999999] ${className}`}
    />
  );
};

export default CommonInput;
