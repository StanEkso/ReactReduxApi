import { Photo } from '../../types/photo';
interface PhotosState {
  photos: Photo[];
  isLoaded: boolean;
  error: string | null;
}

const initialState: PhotosState = {
  photos: [],
  isLoaded: false,
  error: null
};
export enum PhotosActionTypes {
  SET_PHOTOS_ERROR = 'photos/set_error',
  SET_PHOTOS = 'photos/set'
}

interface SetPhotosAction {
  type: PhotosActionTypes.SET_PHOTOS;
  payload: Photo[];
}

interface PhotosErrorAction {
  type: PhotosActionTypes.SET_PHOTOS_ERROR;
  payload: string;
}

export type PhotosAction = SetPhotosAction | PhotosErrorAction;
export const photosReducer = (
  state = initialState,
  { type, payload }: PhotosAction
): PhotosState => {
  switch (type) {
    case PhotosActionTypes.SET_PHOTOS:
      return {
        ...state,
        photos: payload,
        isLoaded: true,
        error: null
      };
    case PhotosActionTypes.SET_PHOTOS_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
