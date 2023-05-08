import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../../mockData/mockData.json"

interface CurrentModule {
    currentContentType: string;
}

const initialState: CurrentModule = {
    currentContentType:''
};

export const currentModuleSlice = createSlice({
  name: 'currentModule',
  initialState,
  reducers: {
    setCurrentContentType: (state, action: PayloadAction<any>) => {
      const moduleSteps = data.challengeKinds[0].modules?.find(module => action.payload.moduleid && module.id === parseInt(action.payload.moduleid))?.steps;
      const checkpoint = moduleSteps?.find(step => action.payload.checkpointid && step.id === parseInt(action.payload.checkpointid));
      const contentType = checkpoint?.contentType;
      if(contentType) state.currentContentType = contentType;
    }
  },
});

export const { setCurrentContentType } = currentModuleSlice.actions;

export default currentModuleSlice.reducer;
