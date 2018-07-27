import {IAction} from './';
import {
  GET_TEAM,
} from '../actions/types';

const INITIAL_STATE = {
  members: [],
  recomended: [],
}

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_TEAM:
      return {
        ...state,
        members: action.payload.members,
        recomended: action.payload.recomended,
      }
    default:
      return state;
  }
}
