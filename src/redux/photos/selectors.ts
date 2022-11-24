import { RootState } from '../store';

export const selectPhotosState = (state: RootState) => state.photos;
export const selectPhotosData = (state: RootState) => state.photos.photos;
export const selectPhotosIsLoaded = (state: RootState) => state.photos.isLoaded;
