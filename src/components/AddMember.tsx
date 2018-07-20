import * as React from 'react';
import {Text, View} from 'react-native';

export default class Profile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <View>
        <Text>Profile Here</Text>
      </View>
    );
  }
}
