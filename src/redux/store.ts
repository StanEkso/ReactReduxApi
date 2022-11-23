import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AlbumAction, albumsReducer } from "./albums/reducer";
import { PhotosAction, photosReducer } from "./photos/reducer";
import { UserAction, usersReducer } from "./users/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
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
