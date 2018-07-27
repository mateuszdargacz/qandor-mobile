import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IAppState} from '../reducers';

const ReactElements = require('react-native-elements');
const { connect } = require('react-redux');
const {GiftedChat} = require('react-native-gifted-chat');

import { getProfile } from '../actions/ProfileActions';
import {ArrowBack} from './common/ArrowBack';

@connect(
  (state: IAppState) => {
    console.log('Profile state: ', state);
    const { chat } = state;
    return { chat }
  }, { getProfile },
)
export default class Chat extends React.Component<any, any> {
  public static navigationOptions = ({navigation}: any) => {
    // console.log('navigation: ', navigation);
    const {params} = navigation.state;
    return({
      title: 'Unknown',
      headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBack/>
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity onPress={() => params.showProfile()}>
          <Image
            style={styles.imageMiniStyle}
            source={{uri: 'file:///Users/michal/Desktop/profile.png'}}
          />
        </TouchableOpacity>,
    });
  }

  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  public componentWillMount() {
    const {navigation} = this.props;
    navigation.setParams({showProfile: this.showProfile});
  }

  public render() {
    const {chat} = this.props;
    return(
      <GiftedChat
        messages={chat.messages}
        onSend={(messages: any) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        parsePatterns={(linkStyle: any) => [
          {
            pattern: /#(\w+)/,
            style: { ...linkStyle, color: 'lightgreen' },
            onPress: (props: any) => alert(`press on ${props}`),
          },
        ]}
      />
    );
  }

  private onSend = (messages: any) => {
    // console.log('messages: ', messages);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  private showProfile = () => {
    this.props.getProfile(0);
  }
}

const styles = StyleSheet.create({
  imageMiniStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 15,
  },
});
