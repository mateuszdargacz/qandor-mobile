import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ReactElements = require('react-native-elements');

import ConversationItem from './ConversationItem';
import Search from './Search';

export default class Messages extends React.Component<any, any> {
  public static navigationOptions = {
    title: 'Messages',
    tabBarIcon: () => (
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

  public render() {
    const data = require('../../messages.json');
    console.log(`data: ${data[0].user}`);
    return(
      <View style={styles.container}>
        <View style={styles.searchContainerStyle}>
          <Search/>
        </View>
        <View style={styles.listStyle}>
          <FlatList
            data={data}
            renderItem={({item, index}) => this.renderListItem(item, index)}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
      </View>
    );
  }

  private renderListItem = (item: any, index: number) => {
    return (
      <ConversationItem key={index} data={item} id={index}/>
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
