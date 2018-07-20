import * as React from 'react';
import {Text, View} from 'react-native';

export default class Directory extends React.Component<any, any> {
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
