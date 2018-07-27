import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const ReactElements = require('react-native-elements');

export default class TeamAddMember extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
    };
  }

  private renderRecomended = () => {
    const {recomended} = this.props;
    
    return recomended.map((user: any) => (
      <View style={styles.recomendedContainerStyle}>
        <Image
          source={user.image}
          style={styles.imageStyle}
        />
        <View>
          <Text style={styles.userNameText}>{user.name}</Text>
          <Text style={styles.recByText}>Recomended by</Text>
          <Text style={styles.recByText}>user.recomendedBy</Text>
        </View>
        <ReactElements.Button
          title="Invite"
          backgroundColor=""
          borderRadius={15}
          buttonStyle={styles.inviteButtonStyle}
          textStyle={styles.inviteButtonText}
          onPress={() => null}
        />
      </View>
    ));
  }

  public render() {
    const { show, position } = this.props;
    if (!show) {
      return null;
    }
    return (
      <View style={styles.addMemberContainerStyle}>
        <View style={styles.positionNameStyle}>
          <Text style={styles.positionNameText}>{position}</Text> 
        </View>
        <ScrollView style={{width: '100%'}}>
          {this.renderRecomended()}
          <View style={styles.emailInvite}>
            <TextInput
              placeholder={`My${position.replace(/ /g, '')}@mail.com`}
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.emailText}
            />
            <ReactElements.Button
              title="Invite"
              backgroundColor=""
              borderRadius={15}
              buttonStyle={styles.inviteButtonStyle}
              textStyle={styles.inviteButtonText}
              onPress={() => null}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addMemberContainerStyle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    minHeight: 330,
    padding: 20,
    backgroundColor: '#fff',
    zIndex: 9001,
    borderBottomWidth: 2,
    borderColor: '#dadbdd',
  },
  positionNameStyle: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 0.4,
    borderColor: '#ebebeb',
  },
  positionNameText: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    color: '#434343',
    fontSize: 16,
  },
  recomendedContainerStyle: {
    width: '80%',
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderColor: '#ebebeb',
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userNameText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  recByText: {

  },
  inviteButtonStyle: {
    height: 35,
    width: 90,
    backgroundColor: '#2077f4',
    borderRadius: 3,
    margin: 0,
    marginRight: -15,
  },
  inviteButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  emailInvite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailText: {
    flex: 1,
    backgroundColor: '#efefef',
    borderRadius: 3,
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
});
