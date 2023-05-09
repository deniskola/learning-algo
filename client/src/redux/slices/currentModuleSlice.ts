import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../../mockData/mockData.json"

interface CurrentModule {
    currentCheckpoint: any;
}

const initialState: CurrentModule = {
    currentCheckpoint: ''
};

export const currentModuleSlice = createSlice({
  name: 'currentModule',
  initialState,
  reducers: {
    setCurrentCheckpoint: (state, action: PayloadAction<any>) => {
      const moduleCheckpoints = data.challengeKinds[0].modules?.find(module => action.payload.moduleid && module.id === parseInt(action.payload.moduleid))?.steps;
      const checkpoint = moduleCheckpoints?.find(step => action.payload.checkpointid && step.id === parseInt(action.payload.checkpointid));
      state.currentCheckpoint = checkpoint;
    }
  },
});

export const { setCurrentCheckpoint } = currentModuleSlice.actions;

export default currentModuleSlice.reducer;
