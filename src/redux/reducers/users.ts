import { User } from "../../types/user";

interface AlbumsState {
  users: User[];
  isLoaded: boolean;
}

const initialState: AlbumsState = {
  users: [],
  isLoaded: false,
};
export enum UsersActionTypes {
  SET_USERS = "users/set",
}

interface SetUsersAction {
  type: UsersActionTypes.SET_USERS;
  payload: User[];
}

export type UserAction = SetUsersAction;
export const usersReducer = (
  state = initialState,
  { type, payload }: UserAction
): AlbumsState => {
  switch (type) {
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        users: payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};
