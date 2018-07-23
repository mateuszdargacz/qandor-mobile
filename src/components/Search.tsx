import * as React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const ReactElements = require('react-native-elements');

export default class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  public render() {
    return (
      <View style={styles.searchSection}>
        <ReactElements.Icon style={styles.searchIcon} name="search" size={20} color="#7f7f7f"/>
        <TextInput
          style={styles.searchInputStyle}
          onChangeText={(searchText) => this.setState({searchText})}
          value={this.state.searchText}
          placeholder="Search for message or user"
          placeholderTextColor="#7f7f7f"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 4,
},
  searchInputStyle: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#7f7f7f',
    fontSize: 14,
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 40,
  },
});
