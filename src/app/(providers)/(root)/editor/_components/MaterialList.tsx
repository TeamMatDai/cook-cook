import { Recipe } from '@/types/recipe';
import CommonInput from './CommonInput';

interface HandleMaterial {
  index: number;
  field: 'name' | 'value';
  value: string;
}

interface MaterialListProps {
  material: Recipe['material'];
  setMaterial: (
    material: Recipe['material'] | ((prevMaterial: Recipe['material']) => Recipe['material'])
  ) => void;
}

const MaterialList = ({ material, setMaterial }: MaterialListProps) => {
  const handleMaterialChange = ({ index, field, value }: HandleMaterial) => {
    const newMaterial = [...material];
    newMaterial[index] = { ...newMaterial[index], [field]: value };
    setMaterial(newMaterial);
  };

  const addMaterial = () => {
    setMaterial((prevMaterial) => [...prevMaterial, { name: '', value: '' }]);
  };

  const handleMaterialDelete = (index: number) => {
    if (material.length <= 1) {
      return;
    }
    const deleteMaterial = material.filter((_, i) => i !== index);
    setMaterial(deleteMaterial);
  };

  return (
    <div className="pt-4">
      <p className="w-[60px] h-[18px] font-weight:500 mt-7 mb-4">기본재료</p>
      {material.map((materials, index) => (
        <div key={index} className="flex items-center gap-3 mb-2">
          <CommonInput
            placeholder="재료 이름"
            value={materials.name}
            setValue={(value) => handleMaterialChange({ index, field: 'name', value })}
            className="w-48 h-12 flex flex-col justify-center rounded-[6px] border border-[#dbddeb] bg-white pl-[16px]"
          />
          <CommonInput
            placeholder="재료 설명"
            value={materials.value}
            setValue={(value) => handleMaterialChange({ index, field: 'value', value })}
            className="w-48 h-12 flex flex-col justify-center rounded-[6px] border border-[#dbddeb] bg-white pl-[16px]"
          />
          {material.length > 1 && (
            <button
              className="w-14 h-10 flex justify-center items-center gap-[10px] rounded-[30px] bg-[#f5f5f5]"
              onClick={() => handleMaterialDelete(index)}
            >
              삭제
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-center mt-4 mb-2">
        <button
          className="w-30 h-10 flex justify-center items-center gap-[10px] font-semibold px-[16px] py-[10px] mt-5 rounded-[30px] border border-[#f0f0f0] hover:bg-gray-100"
          onClick={addMaterial}
        >
          + 재료 추가하기
        </button>
      </div>
    </div>
  );
};

export default MaterialList;
