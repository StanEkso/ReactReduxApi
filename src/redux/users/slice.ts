import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../../api';
import { User } from '../../types/user';
interface UsersState {
  users: User[];
  isLoaded: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  isLoaded: false,
  error: null
};

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  return await getUsers();
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoaded = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message || null;
      state.isLoaded = true;
    });
  }
});
export const { reducer: usersReducer } = usersSlice;
