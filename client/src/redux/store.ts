import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './slices/profileSlice';
import checkpointReducer from './slices/checkpointSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, profileReducer);

export const store = configureStore({
  reducer: {
    profile: persistedReducer,
    checkpoint: checkpointReducer
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
