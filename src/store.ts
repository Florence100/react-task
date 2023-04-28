import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducer';
import { photoApi } from './services/api';

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddware) => getDefaultMiddware().concat(photoApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
