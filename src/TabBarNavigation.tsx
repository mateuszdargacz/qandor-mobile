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
import Messages from './components/Messages';
import RegisterForm from './components/RegisterForm';
import Teams from './components/Teams';
import {IState} from './reducers/AuthReducer';

const TeamsNav = StackNavigator({
  Teams: {screen: Teams},
});

const MessagesNav = StackNavigator({
  Messages: {screen: Messages},
});

const TabBar = TabNavigator({
  Teams: {screen: TeamsNav},
  Chat: {screen: MessagesNav},
  Directory: {screen: Directory},
}, {
  animationEnabled: true,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});

const BaseRouter = StackNavigator({
  Login: {screen: LoginForm},
  Loading: {screen: LoadingScreen},
  RegisterForm: {screen: RegisterForm},
  MainScreen: {screen: TabBar},
}, {
  headerMode: 'none',
});

class TabBarNavigation extends React.Component<any, IState> {
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

const mapStateToProps = (state: IState) => {
  return {
    navigationState: state.baseRouting,
  };
};

export {BaseRouter};
export {TabBar};
export default connect(mapStateToProps)(TabBarNavigation);
