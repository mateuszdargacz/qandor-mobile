import {LOGIN_SUCCESS} from '../actions/types';
import {IAction} from './';

const INITIAL_STATE = {access_token: ''};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, access_token: action.payload};
    default:
      return state;
  }
};

