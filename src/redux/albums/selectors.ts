import { RootState } from "../store";

export const selectAlbumsState = (state: RootState) => state.albums;
export const selectAlbumsData = (state: RootState) => state.albums.albums;
export const selectAlbumsIsLoaded = (state: RootState) => state.albums.isLoaded;
