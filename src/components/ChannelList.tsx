import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    title: 'Messages',
    tabBarIcon: () => (
        // <ImageSvg
        //   source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Firefox_Logo%2C_2017.svg'}}
        //   style={{width: 30, height: 30}}
        // />
        <ReactElements.Icon name="account-circle" color="#2077f5"/>
    ),
    headerLeft:
      <TouchableOpacity>
        <Text style={{color: '#fff', marginLeft: 15, fontSize: 14}}>Edit</Text>
      </TouchableOpacity>,
    headerRight:
      <TouchableOpacity>
        <ReactElements.Icon
          name="sticky-note"
          type="font-awesome"
          color="white"
          size={18}
          containerStyle={{marginRight: 15}}
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
    console.log(`data: `, this.props);
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
