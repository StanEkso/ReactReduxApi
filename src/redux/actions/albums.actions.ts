import { Dispatch } from "redux";
import { getAlbums } from "../../api";
import { AlbumAction, AlbumsActionTypes } from "../reducers/albums";

export const fetchAlbums = () => {
  return (dispatch: Dispatch<AlbumAction>) => {
    getAlbums().then((albums) => {
      dispatch({ type: AlbumsActionTypes.SET_ALBUMS, payload: albums });
    });
  };
};
