import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const { connect } = require('react-redux');

import { getMessages } from '../actions/ConversationActions';

@connect(
  null, { getMessages },
)
export default class ConversationItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      enable: true,
    };
  }

  private handlePress = () => {
    const {data} = this.props;
    if (this.state.enable) {
      this.setState({enable: false});
      this.props.getMessages(data.group_id);
      setTimeout(() => {
        this.setState({enable: true});
      }, 1000);
    }
  }

  private renderNames = () => {
    const {users} = this.props.data;
    const group = new Array();
    users.slice(0, 3).forEach((user: string) => {
      user = user.split(' ')[0];
      group.push(user);
    });
    let newGroup = group.join(' & ');
    if (users.length > 3) {
      return newGroup += ' ...';
    }
    else {
      return newGroup;
    }
  }

  public render() {
    const {data, id} = this.props;
    if (data.users.length > 1) {
      return (
        <TouchableOpacity key={`${id}`} onPress={() => this.handlePress()}>
          <View style={styles.conversationItemStyle}>
            <View style={styles.imageContainerStyle}>
              <Image
                style={styles.imageMiniFirstStyle}
                source={{uri: data.image}}
              />
              <Image
                style={styles.imageMiniSecondStyle}
                source={{uri: data.image}}
              />
            </View>
            <View style={styles.conversationInfoStyle}>
              <View style={styles.conversationHeaderStyle}>
                <Text style={styles.participantsNamesStyle}>{this.renderNames()}</Text>
                <Text style={styles.timestampStyle}>{data.lastMessageTime}</Text>
              </View>
              <View style={styles.lastConversationBody}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={{color: '#787878'}}>{data.lastMessageText}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity key={`${id}`} onPress={() => this.handlePress()}>
          <View style={styles.conversationItemStyle}>
            <View style={styles.imageContainerStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri: data.image}}
              />
            </View>
            <View style={styles.conversationInfoStyle}>
              <View style={styles.conversationHeaderStyle}>
                <Text style={styles.participantsNamesStyle}>{data.users[0]}</Text>
                <Text style={styles.timestampStyle}>{data.lastMessageTime}</Text>
              </View>
              <View style={styles.lastConversationBody}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={{color: '#787878'}}>{data.lastMessageText}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  conversationItemStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    height: 100,
  },
  imageContainerStyle: {
    margin: 15,
    marginLeft: 0,
    width: 70,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  imageMiniFirstStyle: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  imageMiniSecondStyle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  conversationInfoStyle: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 0.4,
    borderBottomColor: '#888',
  },
  participantsNamesStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestampStyle: {
    fontSize: 16,
    color: '#787878',
  },
  conversationHeaderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    marginTop: 20,
  },
  lastConversationBody: {
    flex: 1,
  },
});
