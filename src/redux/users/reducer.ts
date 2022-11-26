import { User } from '../../types/user';

interface AlbumsState {
  users: User[];
  isLoaded: boolean;
  error: string | null;
}

const initialState: AlbumsState = {
  users: [],
  isLoaded: false,
  error: null
};
export enum UsersActionTypes {
  SET_USERS = 'users/set',
  SET_USERS_ERROR = 'users/set_error'
}

interface SetUsersAction {
  type: UsersActionTypes.SET_USERS;
  payload: User[];
}

interface UsersErrorAction {
  type: UsersActionTypes.SET_USERS_ERROR;
  payload: string;
}

export type UserAction = SetUsersAction | UsersErrorAction;
export const usersReducer = (state = initialState, { type, payload }: UserAction): AlbumsState => {
  switch (type) {
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        users: payload,
        isLoaded: true,
        error: null
      };
    case UsersActionTypes.SET_USERS_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
