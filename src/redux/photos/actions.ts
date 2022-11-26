import { getPhotos } from '../../api';
import { PhotosAction, PhotosActionTypes } from './reducer';
import { TypedThunkAction } from '../store';

export type PhotosThunkAction = TypedThunkAction<PhotosAction>;

export const fetchPhotos = (): PhotosThunkAction => {
  return async (dispatch) => {
    try {
      const photos = await getPhotos();
      dispatch({ type: PhotosActionTypes.SET_PHOTOS, payload: photos });
    } catch (error) {
      dispatch({
        type: PhotosActionTypes.SET_PHOTOS_ERROR,
        payload: 'Something went wrong when loading photos'
      });
    }
  };
};
