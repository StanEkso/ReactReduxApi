import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPhotos } from '../../api';
import { Photo } from '../../types/photo';
interface PhotosState {
  photos: Photo[];
  isLoaded: boolean;
  error: string | null;
}

const initialState: PhotosState = {
  photos: [],
  isLoaded: false,
  error: null
};

export const fetchPhotos = createAsyncThunk('photos/fetch', async () => {
  return await getPhotos();
});

const usersSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.isLoaded = true;
      state.error = null;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.isLoaded = true;
      state.error = action.error.message || null;
    });
  }
});

export const { reducer: photosReducer } = usersSlice;
