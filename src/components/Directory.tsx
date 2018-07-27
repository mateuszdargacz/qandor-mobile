import * as React from 'react';
import {Image, Text, View} from 'react-native';

export default class Directory extends React.Component<any, any> {
  public static navigationOptions = {
    title:
      <Text style={{fontWeight: 'bold', fontFamily: 'Montserrat-Bold'}}>Files</Text>,
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/file_icon.png')}
        style={{width: 30, height: 30}}
      />
    ),
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <View>
        <Text>Directory Here</Text>
      </View>
    );
  }
}
