import { useState } from 'react';
import { Items } from '../../../types/checkpoint';

interface ItemsInputProps {
    setItems: React.Dispatch<React.SetStateAction<Items>>
}

const ItemsInput: React.FC<ItemsInputProps> = ({setItems}) => {
  const [inputValue, setInputValue] = useState<string>('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const inputValues = inputValue.split(',');

    const newData: Items = inputValues.map((value, index) => ({
        id: index,
        value: value.trim(),
        x: [0, 0],
        opacity: [0.5]
    }));

    setItems(newData);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default ItemsInput;
