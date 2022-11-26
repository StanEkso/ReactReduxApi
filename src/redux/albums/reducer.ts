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
export enum AlbumsActionTypes {
  SET_ALBUMS = 'albums/set',
  SET_ALBUMS_ERROR = 'albums/set_error'
}

interface SetAlbumsAction {
  type: AlbumsActionTypes.SET_ALBUMS;
  payload: Album[];
}

interface AlbumsErrorAction {
  type: AlbumsActionTypes.SET_ALBUMS_ERROR;
  payload: string;
}

export type AlbumAction = SetAlbumsAction | AlbumsErrorAction;
export const albumsReducer = (state = initialState, action: AlbumAction): AlbumsState => {
  switch (action.type) {
    case AlbumsActionTypes.SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        isLoaded: true,
        error: null
      };
    case AlbumsActionTypes.SET_ALBUMS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
