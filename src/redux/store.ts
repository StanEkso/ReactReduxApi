import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { AlbumAction, albumsReducer } from "./albums/reducer";
import { PhotosAction, photosReducer } from "./photos/reducer";
import { UserAction, usersReducer } from "./users/reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootAction = AlbumAction | UserAction | PhotosAction;
export type TypedThunkDispatch<ActionType extends Action<any>> = ThunkDispatch<
  RootState,
  any,
  ActionType
>;
export type TypedThunkAction<ActionType extends Action<any> = Action<any>> =
  ThunkAction<void, RootState, any, ActionType>;
