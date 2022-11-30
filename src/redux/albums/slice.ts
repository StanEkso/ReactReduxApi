import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAlbums } from '../../api';
import { Album } from '../../types/album';
export interface AlbumsState {
  albums: Album[];
  isLoaded: boolean;
  error: string | null;
}

const initialState: AlbumsState = {
  albums: [],
  isLoaded: false,
  error: null
};
export const fetchAlbums = createAsyncThunk('albums/fetch', async () => {
  return await getAlbums();
});

const usersSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.albums = action.payload;
      state.isLoaded = true;
      state.error = null;
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoaded = true;
      state.error = action.error.message || null;
    });
  }
});

export const { reducer: albumsReducer } = usersSlice;
