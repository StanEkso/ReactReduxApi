import { Album } from '../types/album';
import { Photo } from '../types/photo';
import { User } from '../types/user';
import { validateResponse } from './common';
import { BASE_URL } from './constants';

export const getAlbums = (): Promise<Album[]> => fetch(BASE_URL + '/albums').then(validateResponse);

export const getUsers = (): Promise<User[]> => fetch(BASE_URL + '/users').then(validateResponse);

export const getPhotos = (): Promise<Photo[]> => {
  return fetch(BASE_URL + `/photos`).then(validateResponse);
};
