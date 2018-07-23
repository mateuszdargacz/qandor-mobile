import {combineReducers} from 'redux';
import {BaseRouter, TabBar} from '../TabBarNavigation';
import AuthReducer from './AuthReducer';
import ConversationReducer from './ConversationReducer';

export default combineReducers({
  auth: AuthReducer,
  conversation: ConversationReducer,
  baseRouting: (state, action) => BaseRouter.router.getStateForAction(action, state),
  tabBarRouting: (state, action) => TabBar.router.getStateForAction(action, state)
});

export interface IAction {
  type: string;
  payload: {};
}
