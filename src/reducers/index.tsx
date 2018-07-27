import {combineReducers} from 'redux';
import {BaseRouter, TabBar} from '../TabBarNavigation';
import AuthReducer from './AuthReducer';
import ChannelReducer from './ChannelReducer';
import ProfileReducer from './ProfileReducer';
import ChatReducer from './ChatReducer';
import TeamReducer from './TeamReducer';

export interface IAction {
  type: string;
  payload: any;
}

interface IAuth {
  access_token: string;
}

interface IProfile {
  image: string;
  username: string;
  userID: number;
  rating: number;
  skills: string[];
  aboutMe: string;
  nonprofitWork: string;
  videos: string[];
}

interface IChannel {
  channelID: number;
  users: object[];
  lastMessageTime: string;
  lastMessageText: string;
  image: string;
}

interface IChat {
  groupID: number;
  messages: object[];
}

export interface IMember {
  userID: number;
  name: string;
  position: string;
  image: String;
}

interface ITeam {
  members: IMember[];
  recomended: any[]
}

export interface IAppState {
  access_token: string;
  auth: IAuth;
  profile: IProfile;
  channels: IChannel[];
  chat: IChat;
  team: ITeam;
  baseRouting: object;
}

export default combineReducers({
  auth: AuthReducer,
  channels: ChannelReducer,
  profile: ProfileReducer,
  chat: ChatReducer,
  team: TeamReducer,
  baseRouting: (state, action) => BaseRouter.router.getStateForAction(action, state),
  tabBarRouting: (state, action) => TabBar.router.getStateForAction(action, state)
});
