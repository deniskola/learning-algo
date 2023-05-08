import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './slices/profileSlice';
import checkpointReducer from './slices/checkpointSlice';
import currentModuleReducer from './slices/currentModuleSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, profileReducer);

export const store = configureStore({
  reducer: {
    profile: persistedReducer,
    checkpoint: checkpointReducer,
    currentModule: currentModuleReducer
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
