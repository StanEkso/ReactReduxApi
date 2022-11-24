import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { TypedThunkDispatch } from '../store';

export const useAppDispatch: <ActionType extends Action<any>>() => TypedThunkDispatch<ActionType> =
  useDispatch;
