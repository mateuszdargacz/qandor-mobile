import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {IState} from '../reducers/AuthReducer';
const ReactElements = require('react-native-elements');

// @connect()
export default class LoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: '',
      username: '',
      rememberMe: false,
      signIn: false,
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.ImageContainerStyle}>
            <Image
              style={styles.ImageStyle}
              source={require('../../src/Images/logo.png')}
            />
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(username) => {this.setState({username}); this.enableSignIn(username); }}
              value={this.state.username}
              placeholder="Username"
              placeholderTextColor="#2078f5"
            />
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={(password) => {this.setState({password}); this.enableSignIn(password); }}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="#2078f5"
            />
          </View>
          <View style={styles.loginOptionStyle}>
            <ReactElements.CheckBox
              checked={this.state.rememberMe}
              onPress={() => this.setState({rememberMe: !this.state.rememberMe})}
              title="Remember Me"
              style={styles.rememberMeStyle}
              checkedColor="#2077f4"
            />
            <ReactElements.Button
              title="Forgot Passwort?"
              textStyle={styles.forgotPassStyle}
              backgroundColor="transparent"
              buttonStyle={styles.forgotPasswdStyle}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={{flex: 3}}>
            <ReactElements.Button
              large
              title="SIGN IN"
              borderRadius={5}
              disabled={!this.state.signIn}
              backgroundColor="#2077f4"
              textStyle={{fontWeight: 'bold'}}
              buttonStyle={styles.signInButton}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'center'}}>Don't have an account?</Text>
            <ReactElements.Button
              title="SIGN UP"
              backgroundColor="transparent"
              textStyle={styles.signUpButton}
            />
          </View>
        </View>
      </View>
    );
  }

  private enableSignIn(text: string) {
    if (text && this.state.password !== '' && this.state.username !== '') {
      this.setState({signIn: true});
    }
    else {
      this.setState({signIn: false});
    }
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
  top: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 50,
    width: '80%',
  },
  ImageContainerStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    height: 150,
    width: 150,
  },
  inputContainerStyle: {
    flex: 3,
  },
  inputStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#efefef',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  loginOptionStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMeStyle: {
    height: 20,
    backgroundColor: 'transparent',
  },
  forgotPassStyle: {
    color: '#287af4',
    fontSize: 14,
  },
  forgotPasswdStyle: {
    padding: 0,
    margin: 0,
    marginTop: 3,
    marginRight: -15,
  },
  bottom: {
    flex: 2,
    width: '80%',
  },
  signInButton: {
    margin: 0,
    marginLeft: -15,
    marginRight: -15,
  },
  signUpButton: {
    color: '#2078f5',
    fontWeight: 'bold',
  },
});
