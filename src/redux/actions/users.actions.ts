import { Dispatch } from "react";
import { getUsers } from "../../api";
import { UserAction, UsersActionTypes } from "../reducers/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const users = await getUsers();
    dispatch({ type: UsersActionTypes.SET_USERS, payload: users });
  };
};
