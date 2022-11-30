import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/slice';
import { photosReducer } from './photos/slice';
import { albumsReducer } from './albums/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    photos: photosReducer,
    albums: albumsReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootAction = Parameters<typeof store.dispatch>[0];
