import React from 'react';

interface Material {
  name: string;
  value: string;
}

interface MaterialListProps {
  material: Material[];
  setMaterial: (material: Material[]) => void;
}

const MaterialList: React.FC<MaterialListProps> = ({ material, setMaterial }) => {
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

  return (
    <div>
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
    </div>
  );
};

export default MaterialList;
