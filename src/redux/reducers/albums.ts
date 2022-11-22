import { Album } from "../../types/album";

interface AlbumsState {
  albums: Album[];
  isLoaded: boolean;
}

const initialState: AlbumsState = {
  albums: [],
  isLoaded: false,
};
export enum AlbumsActionTypes {
  SET_ALBUMS = "albums/set",
}

interface SetAlbumsAction {
  type: AlbumsActionTypes.SET_ALBUMS;
  payload: Album[];
}

export type AlbumAction = SetAlbumsAction;
export const albumsReducer = (
  state = initialState,
  { type, payload }: AlbumAction
): AlbumsState => {
  switch (type) {
    case AlbumsActionTypes.SET_ALBUMS:
      return {
        ...state,
        albums: payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};
