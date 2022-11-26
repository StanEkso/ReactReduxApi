import { getUsers } from '../../api';
import { UserAction, UsersActionTypes } from './reducer';
import { TypedThunkAction } from '../store';

export type AlbumsThunkAction = TypedThunkAction<UserAction>;

export const fetchUsers = (): AlbumsThunkAction => {
  return async (dispatch) => {
    try {
      const users = await getUsers();
      dispatch({ type: UsersActionTypes.SET_USERS, payload: users });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.SET_USERS_ERROR,
        payload: 'Something went wrong when loading users'
      });
    }
  };
};
