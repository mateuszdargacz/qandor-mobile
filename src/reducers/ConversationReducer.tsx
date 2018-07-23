import {} from '../actions/types';
import {IAction} from './';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
