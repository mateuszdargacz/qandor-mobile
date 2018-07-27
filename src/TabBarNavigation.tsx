import * as React from 'react';
import {
  addNavigationHelpers, StackNavigator, TabBarBottom,
  TabNavigator,
} from 'react-navigation';
import {connect} from 'react-redux';
import Chat from './components/Chat';
import Directory from './components/Directory';
import LoadingScreen from './components/LoadingScreen';
import LoginForm from './components/LoginForm';
import ChannelList from './components/ChannelList';
import RegisterForm from './components/RegisterForm';
import Teams from './components/Teams';
import Profile from './components/Profile';
import {IAppState} from './reducers/';

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#2077f5',
  },
  headerTitleStyle: {
    color: 'white',
  },
};

const TeamsNav = StackNavigator({
  Teams: {screen: Teams},
}, {
  navigationOptions: {...navigationOptions},
});

const Channels = StackNavigator({
  ChannelList: {screen: ChannelList},
  Chat: {screen: Chat, navigationOptions: { tabBarVisible: false  }},
  Profile: {screen: Profile},
}, {
  navigationOptions: {...navigationOptions},
});

const Directories = StackNavigator({
  Files: {screen: Directory},
}, {
  navigationOptions: {...navigationOptions},
});

const TabBar = TabNavigator({
  Teams: {screen: TeamsNav},
  Channels: {screen: Channels},
  Directory: {screen: Directories},
}, {
  animationEnabled: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  initialRouteName: 'Channels',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#2077f5',
    inactiveTintColor: '#c6c6c6',
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
    showLabel: false,
  },
});

const BaseRouter = StackNavigator({
  MainScreen: {screen: TabBar},
  Login: {screen: LoginForm},
  Loading: {screen: LoadingScreen},
  RegisterForm: {screen: RegisterForm},
}, {
  headerMode: 'none',
});

class TabBarNavigation extends React.Component<any, IAppState> {
  public render() {
    const {dispatch, navigationState} = this.props;
    return (
      <BaseRouter
        navigation={addNavigationHelpers({dispatch, state: navigationState})
        }
      />
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    navigationState: state.baseRouting,
  };
};

export {BaseRouter};
export {TabBar};
export default connect(mapStateToProps)(TabBarNavigation);
