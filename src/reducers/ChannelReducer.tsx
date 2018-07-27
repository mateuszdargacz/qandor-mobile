import {
  GET_CHANNELS,
} from '../actions/types';
import {IAction} from './';

const INITIAL_STATE = new Array;

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_CHANNELS:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return [...state];
  }
};
