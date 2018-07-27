import * as React from 'react';
import {Image, Text, View} from 'react-native';

const ReactElements = require('react-native-elements');

export default class Teams extends React.Component<any, any> {
  public static navigationOptions = {
    title:
      <Text style={{fontWeight: 'bold', fontFamily: 'Montserrat-Bold'}}>Teams</Text>,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/team_icon.png')}
        style={{width: 45, height: 30}}
      />
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
