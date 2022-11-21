import { User } from "../types/user";
import { BASE_URL } from "./constants";

export const getUsers = (): Promise<User[]> =>
  fetch(BASE_URL + "/users").then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });

export const getUserById = (id: number): Promise<User> =>
  fetch(BASE_URL + `/users/${id}`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
export const getUserAlbums = (id: number): Promise<User> =>
  fetch(BASE_URL + `/users/${id}/albums`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
