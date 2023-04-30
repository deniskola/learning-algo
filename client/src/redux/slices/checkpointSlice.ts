import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChallengeInfo, SortingSteps, UserSortingSteps } from '../../types/checkpoint';

interface CheckpointState {
  challengeInfo: ChallengeInfo;
  completed: number;
  errorCounter: number;
  activeStep: number;
  // userSortingSteps: UserSortingSteps;
  challengeStatus: number;
  stepCount: number;
  // sortingSteps: SortingSteps
}

const initialState: CheckpointState = {
  challengeInfo: [],
  completed: 0,
  errorCounter: 0,
  activeStep: 0,
  // userSortingSteps: [],
  challengeStatus: 0,
  stepCount: 0,
  // sortingSteps: undefined,

};

export const checkpointSlice 
= createSlice({
  name: 'checkpoint',
  initialState,
  reducers: {
    setChallengeInfo: (state, action: PayloadAction<ChallengeInfo>) => {
      state.challengeInfo = action.payload;
    },
    setCompleted: (state, action: PayloadAction<number>) => {
      state.completed = action.payload;
    },
    setErrorCounter: (state, action: PayloadAction<number>) => {
      state.errorCounter = action.payload;
    },
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
    // setUserSortingSteps: (state, action: PayloadAction<UserSortingSteps>) => {
    //   state.userSortingSteps = action.payload;
    // },
    setChallengeStatus: (state, action: PayloadAction<number>) => {
      state.challengeStatus = action.payload;
    },
    setStepCount: (state, action: PayloadAction<number>) => {
      state.stepCount = action.payload;
    },
    // setSortingSteps: (state, action: PayloadAction<SortingSteps>) => {
    //   state.sortingSteps = action.payload;
    // }
  },
});

export const { 
  setChallengeInfo, 
  setCompleted, 
  setErrorCounter,
  setActiveStep,
  // setUserSortingSteps,
  setChallengeStatus,
  setStepCount,
  // setSortingSteps

} = checkpointSlice.actions;

export default checkpointSlice.reducer;
