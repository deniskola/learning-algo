import {useState} from "react";
import {Items} from "../../../types/checkpoint";

interface ItemsInputProps {
  setItems: React.Dispatch<React.SetStateAction<Items>>;
}

const ItemsInput: React.FC<ItemsInputProps> = ({setItems}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    //restrict the input to only allow numbers and commas
    const filteredInput = input.replace(/[^0-9,]/g, "");
    setInputValue(filteredInput);
    setIsValid(validateInput(filteredInput));
  };

  const handleAddClick = () => {
    const inputValues = inputValue.split(",");

    const newData: Items = inputValues.map((value, index) => ({
      id: index,
      value: value.trim(),
      x: [0, 0],
      opacity: [0.5],
    }));

    setItems(newData);
  };

  const validateInput = (input: string) => {
    //this regex is used to match a string that contains only numbers and commas, where the numbers seperated by commas are between 1 and 20
    const regex = /^(?:[1-9]|1[0-9]|20)(?:,(?:[1-9]|1[0-9]|20))*$/;
    return regex.test(input);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        pattern="^(?:[1-9]|1[0-9]|20)(?:,(?:[1-9]|1[0-9]|20))*$"
      />
      <button onClick={handleAddClick}>Add</button>
      {!isValid && <p>Please enter a valid input matching the pattern</p>}
    </div>
  );
};

export default ItemsInput;
