import { Album } from "../types/album";
import { Photo } from "../types/photo";
import { User } from "../types/user";

export const match = <T, S>(value: T, getValue: (a: S) => T) => {
  return function (a: S) {
    return getValue(a) === value;
  };
};
export const getUseAlbums = ({
  albums,
  user,
}: {
  albums: Album[];
  user: User;
}) => albums.filter(match(user.id, (a) => a.userId));

export const getAlbumAuthor = ({
  album,
  users,
}: {
  album?: Album;
  users: User[];
}) => {
  return users.find(match(album?.userId, (a) => a.id));
};

export const getAlbumPhotos = ({
  album,
  photos,
}: {
  album?: Album;
  photos: Photo[];
}) => photos.filter(match(album?.id, (p) => p.albumId));

export const getAlbumById = ({ id, albums }: { id: number; albums: Album[] }) =>
  albums.find(match(id, (a) => a.id));
