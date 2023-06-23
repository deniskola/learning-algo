import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlgoVisualizationSlice {
  inputValue: string;
}

const initialState: AlgoVisualizationSlice = {
  inputValue: '1,2,2,5,4,3,1',
};

export const algoVisualizationSlice = createSlice({
  name: 'algoVisualization',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    generateRandomArray: (state) => {
      const length = Math.floor(Math.random() * 6) + 5; // Random array length between 5 and 10
      const newArray = Array.from({length},() => Math.floor(Math.random() * 20) + 1); // Random numbers between 1 and 20
      const arrayToString = newArray.join(","); 
      state.inputValue = arrayToString;
    }
  },
});

export const { setInputValue, generateRandomArray } = algoVisualizationSlice.actions;

export default algoVisualizationSlice.reducer;
