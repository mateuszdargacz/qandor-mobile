import {IAction} from './';
import {
  GET_CHANNEL_CONVESATION,
} from '../actions/types';

const INITIAL_STATE = {
  groupID: null,
  messages: [],
};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_CHANNEL_CONVESATION:
      return {
        ...state,
        groupID: action.payload.group,
        messages: action.payload.data,
      }
    default:
      return state;
  }
}
