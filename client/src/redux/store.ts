import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './slices/profileSlice';
import checkpointReducer from './slices/checkpointSlice';
import currentModuleReducer from './slices/currentModuleSlice';
import algoVisualizationReducer from './slices/algoVisualizationSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    profile: persistReducer(persistConfig, profileReducer),
    checkpoint: checkpointReducer,
    currentModule: currentModuleReducer,
    algoVisualization: persistReducer(persistConfig, algoVisualizationReducer)
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
