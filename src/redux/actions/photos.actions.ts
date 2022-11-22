import { Dispatch } from "redux";
import { getPhotos } from "../../api";
import { PhotosAction, PhotosActionTypes } from "../reducers/photos";

export const fetchPhotos = () => {
  return async (dispatch: Dispatch<PhotosAction>) => {
    const photos = await getPhotos();
    dispatch({ type: PhotosActionTypes.SET_PHOTOS, payload: photos });
  };
};
