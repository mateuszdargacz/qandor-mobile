import * as React from 'react';
import {Text, View} from 'react-native';

const ReactElements = require('react-native-elements');

export default class Teams extends React.Component<any, any> {
  public static navigationOptions = {
    title: 'Teams',
    tabBarIcon: () => (
        <ReactElements.Icon name="account-circle" color="#2077f5"/>
    ),
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <View>
        <Text>Teams Here</Text>
      </View>
    );
  }
}
