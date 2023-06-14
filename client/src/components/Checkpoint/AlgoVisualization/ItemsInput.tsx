import {useState, useEffect} from "react";
import {Items} from "../../../types/checkpoint";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {setInputValue} from "../../../redux/slices/algoVisualizationSlice";

interface ItemsInputProps {
  setItems: React.Dispatch<React.SetStateAction<Items>>;
}

const ItemsInput: React.FC<ItemsInputProps> = ({setItems}) => {
  const inputValue = useSelector(
    (state: RootState) => state.algoVisualization.inputValue
  );
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (isValid || inputValue === "") {
      const inputValues = inputValue.split(",");
      const newData: Items = inputValues
        .filter((value) => value.trim() !== "")
        .map((value, index) => ({
          id: index,
          value: value.trim(),
          x: [0, 0],
          opacity: [0.5],
        }));
      setItems(newData);
    }
  }, [inputValue, isValid, setItems]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const filteredInput = input.replace(/[^0-9,]/g, "");
    dispatch(setInputValue(filteredInput));
    setIsValid(validateInput(filteredInput));
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
      {!isValid && <p>Please enter a valid input matching the pattern</p>}
    </div>
  );
};

export default ItemsInput;
