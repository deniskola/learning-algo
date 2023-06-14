import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlgoVisualizationSlice {
  inputValue: string;
}

const initialState: AlgoVisualizationSlice = {
  inputValue: '1,2,2,5,4,3,1',
};

export const algoVisualizationSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = algoVisualizationSlice.actions;

export default algoVisualizationSlice.reducer;
