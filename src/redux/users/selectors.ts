import { RootState } from '../store';

export const selectUsersState = (state: RootState) => state.users;
export const selectUsersData = (state: RootState) => state.users.users;
export const selectUsersIsLoaded = (state: RootState) => state.users.isLoaded;
