import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ReactElements = require('react-native-elements');

export default class TeamMember extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const {position, member} = this.props;
    return (
      <TouchableOpacity style={{flex: 1}} onPress={() => this.props.onPress()}>
        <View style={styles.memberItemStyle}>
          {
            member ?
              <Image
                source={{uri: member.image}}
                style={styles.imageStyle}
              /> :
              <View style={styles.iconBackground}>
                <ReactElements.Icon
                  name="plus"
                  type="octicon"
                  color="#2077f3"
                  size={36}
                  iconStyle={styles.addIconStyle}
                />
              </View>
          }
          <Text style={[styles.textStyle, styles.memberNameText]}>{member ? member.name : "Add Member"}</Text>
          <Text style={[styles.textStyle, styles.memberPositionText]}>{position ? position : ""}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  memberItemStyle: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  iconBackground: {
    backgroundColor: '#efefef',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconStyle: {
    margin: 15,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 2,
    // borderWidth: 1,
    // borderColor: '#000',
  },
  textStyle: {
    textAlign: 'center'
  },
  memberNameText: {
    color: '#434343',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  memberPositionText: {
    fontSize: 12,
    color: '#757575',
  },
});
