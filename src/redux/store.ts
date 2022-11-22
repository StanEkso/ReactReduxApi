import { Action, applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { rootReducer } from "./reducers";
import { AlbumAction } from "./reducers/albums";
import { PhotosAction } from "./reducers/photos";
import { UserAction } from "./reducers/users";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers(applyMiddleware(thunk)))
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
