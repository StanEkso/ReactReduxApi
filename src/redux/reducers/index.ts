import { combineReducers } from "redux";
import { albumsReducer } from "./albums";
import { photosReducer } from "./photos";
import { usersReducer } from "./users";

export const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});
