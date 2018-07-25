import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ReactElements = require('react-native-elements');
const {GiftedChat} = require('react-native-gifted-chat');

export default class Chat extends React.Component<any, any> {
  public static navigationOptions = ({navigation}: any) => {
    // console.log('navigation: ', navigation);
    return({
      title: 'Unknown',
      headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ReactElements.Icon
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            iconStyle={styles.backIconStyle}
          />
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity onPress={() => {
          console.log('clicked on profile');
          navigation.navigate({routeName: 'Profile'});
        }}>
          <Image
            style={styles.imageMiniStyle}
            source={{uri: "file:///Users/michal/Desktop/profile.png"}}
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
    this.setState({ messages:  [
      {
        _id: Math.round(Math.random() * 1000000),
        text: '#awesome',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        image: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
        sent: true,
        received: true,
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Send me a picture!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        sent: true,
        received: true,
        location: {
          latitude: 48.864601,
          longitude: 2.398704
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Where are you?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Yes, and I use Gifted Chat!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        sent: true,
        received: true
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Are you building a chat app?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
    ]});
  }

  public render() {
    return(
      <GiftedChat
        messages={this.state.messages}
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
    console.log('messages: ', messages);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
}

const styles = StyleSheet.create({
  backIconStyle: {
    marginLeft: 15,
  },
  imageMiniStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 15,
  },
});
