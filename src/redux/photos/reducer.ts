import { Photo } from '../../types/photo';
interface PhotosState {
  photos: Photo[];
  isLoaded: boolean;
}

const initialState: PhotosState = {
  photos: [],
  isLoaded: false
};
export enum PhotosActionTypes {
  SET_PHOTOS = 'photos/set'
}

interface SetPhotosAction {
  type: PhotosActionTypes.SET_PHOTOS;
  payload: Photo[];
}

export type PhotosAction = SetPhotosAction;
export const photosReducer = (
  state = initialState,
  { type, payload }: PhotosAction
): PhotosState => {
  switch (type) {
    case PhotosActionTypes.SET_PHOTOS:
      return {
        ...state,
        photos: payload,
        isLoaded: true
      };
    default:
      return state;
  }
};
