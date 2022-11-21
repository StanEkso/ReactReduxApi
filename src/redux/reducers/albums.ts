import { Album } from "../../types/album";
import { User } from "../../types/user";

interface AlbumsState {
  albums: Album[];
  isLoaded: boolean;
}

const initialState: AlbumsState = {
  albums: [],
  isLoaded: false,
};
enum AlbumsActionTypes {
  SET_ALBUMS = "albums/set",
}

interface SetAlbumsAction {
  type: AlbumsActionTypes.SET_ALBUMS;
  payload: Album[];
}

type AppAction = SetAlbumsAction;
export const albumsReducer = (
  state = initialState,
  { type, payload }: AppAction
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
