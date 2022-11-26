import { Album } from '../types/album';
import { Photo } from '../types/photo';
import { User } from '../types/user';
import { get } from './common';
import { BASE_URL } from './constants';

export const getAlbums = () => get<Album[]>(BASE_URL + '/albums');

export const getUsers = () => get<User[]>(BASE_URL + '/users');

export const getPhotos = () => get<Photo[]>(BASE_URL + '/photos');
