import { Album } from "../../types/album";
import { User } from "../../types/user";

interface AlbumsState {
  users: User[];
  isLoaded: boolean;
}

const initialState: AlbumsState = {
  users: [],
  isLoaded: false,
};
enum AlbumsActionTypes {
  SET_USERS = "albums/set",
}

interface SetUsersAction {
  type: AlbumsActionTypes.SET_USERS;
  payload: User[];
}

type AppAction = SetUsersAction;
export const usersReducer = (
  state = initialState,
  { type, payload }: AppAction
): AlbumsState => {
  switch (type) {
    case AlbumsActionTypes.SET_USERS:
      return {
        ...state,
        users: payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};
