import * as React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const ImageSvg = require('react-native-remote-svg');
const ReactElements = require('react-native-elements');
const { connect } = require('react-redux');

import ChannelItem from './ChannelItem';
import Search from './Search';
import {IAppState} from '../reducers';
import { getChannels } from '../actions/ChannelActions';


@connect(
  (state: IAppState) => {
    const { channels } = state;
    return { channels }
  }, {getChannels},
)
export default class Messages extends React.Component<any, any> {
  public static navigationOptions = {
    title:
      <Text style={{fontWeight: 'bold', fontFamily: 'Montserrat-Bold'}}>Messages</Text>,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/message_icon.png')}
        style={{width: 30, height: 30}}
      />
    ),
    headerLeft:
      <TouchableOpacity>
        <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>Edit</Text>
      </TouchableOpacity>,
    headerRight:
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/new_message.png')}
          style={{width: 25, height: 25, marginRight: 15, margin: 2, paddingBottom: 4}}
        />
      </TouchableOpacity>,
  };

  constructor(props: any) {
    super(props);
  }

  public componentWillMount() {
    this.props.getChannels();
  }

  public render() {
    return(
      <View style={styles.container}>
        <View style={styles.searchContainerStyle}>
          <Search/>
        </View>
        <View style={styles.listStyle}>
          {
            this.props.channels.length > 0 ?
              <FlatList
                data={this.props.channels}
                renderItem={({item, index}) => this.renderListItem(item, index)}
                keyExtractor={(item, index) => `${index}`}
              /> : null
          }
        </View>
      </View>
    );
  }

  private renderListItem = (item: any, index: number) => {
    return (
      <ChannelItem key={index} data={item} id={index}/>
    );
  }
}

const styles = StyleSheet.create({
  headerTextStyle: {

  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  searchContainerStyle: {
    height: 40,
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  listStyle: {
    flex: 1,
    width: '100%',
  },
});
