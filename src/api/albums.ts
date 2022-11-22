import { Album } from "../types/album";
import { Photo } from "../types/photo";
import { BASE_URL } from "./constants";

export const getAlbums = (): Promise<Album[]> =>
  fetch(BASE_URL + "/albums").then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });

export const getAlbumById = (id: number): Promise<Album> =>
  fetch(BASE_URL + `/albums/${id}`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
export const getAlbumPhotos = (id: number): Promise<Album> =>
  fetch(BASE_URL + `/albums/${id}/photos`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });

export const getPhotos = (): Promise<Photo[]> => {
  return fetch(BASE_URL + `/photos`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
};
