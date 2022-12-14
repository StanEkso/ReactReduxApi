import { getAlbums } from '../../api';
import { AlbumAction, AlbumsActionTypes } from './reducer';
import { TypedThunkAction } from '../store';

export type AlbumsThunkAction = TypedThunkAction<AlbumAction>;

export const fetchAlbums = (): AlbumsThunkAction => {
  return async (dispatch) => {
    try {
      const albums = await getAlbums();
      dispatch({ type: AlbumsActionTypes.SET_ALBUMS, payload: albums });
    } catch (error) {
      dispatch({
        type: AlbumsActionTypes.SET_ALBUMS_ERROR,
        payload: 'Something went wrong when loading albums'
      });
    }
  };
};
