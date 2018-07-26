import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {IAppState} from '../reducers';

const { connect } = require('react-redux');
const ReactElements = require('react-native-elements');

import { register } from '../actions/AuthActions';

@connect(
  null, { register },
)
export default class LoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password1: '',
      password2: '',
      username: '',
      email: '',
      signUp: false,
      errorMSG: '',
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.ImageContainerStyle}>
          <Image
              style={styles.ImageStyle}
              source={require('../../assets/logo02.png')}
            />
            <Text style={styles.logoText}>Qandor</Text>
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(username) => {this.setState({username}); this.enableSignUp(username); }}
              value={this.state.username}
              placeholder="Username"
              placeholderTextColor="#2078f5"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(email) => {this.setState({email}); this.enableSignUp(email); }}
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="#2078f5"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={(password1) => {this.setState({password1}); this.enableSignUp(password1); }}
              value={this.state.password1}
              placeholder="Password"
              placeholderTextColor="#2078f5"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={(password2) => {this.setState({password2}); this.enableSignUp(password2); }}
              value={this.state.password2}
              placeholder="Confirm Password"
              placeholderTextColor="#2078f5"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.errorStyle}>{this.state.errorMSG}</Text>
          <ReactElements.Button
            large
            title="SIGN UP"
            borderRadius={4}
            disabled={!this.state.signUp}
            backgroundColor="#2077f4"
            textStyle={{fontWeight: 'bold'}}
            buttonStyle={styles.signUpButton}
            onPress={() => this.register()}
          />
          <ReactElements.Button
            title="Back To Login"
            backgroundColor="transparent"
            textStyle={styles.signInButtonText}
            buttonStyle={{margin: 0}}
            onPress={() => {
              console.log('clicked');
              this.props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  }

  private enableSignUp = (text: string) => {
    this.setState({signUp: text && this.state.password1 !== '' && this.state.username !== '' &&
                   this.state.password2 !== '' && this.state.email !== ''});
  }

  private validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(this.state.email);
  }

  private validatePassword2 = () => {
    return this.state.password2 === this.state.password1 && this.state.password1 !== '';
  }

  private register = () => {
    const validPasswd2 = this.validatePassword2();
    const validEmail = this.validateEmail();
    this.setState({errorMSG: ''});
    if (this.state.signUp && validPasswd2 && validEmail) {
      // this.props.register(this.state.username, this.state.password1, this.state.email);
      console.log('register OK');
    }
    else if (!validPasswd2) {
      console.log('register NOT OK, passwd2');
      this.setState({errorMSG: 'Passwords must match'});
    }
    else if (!validEmail) {
      console.log('register NOT OK, email');
      this.setState({errorMSG: 'Enter correct email'});
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    height: 90,
    width: 90,
  },
  logoText: {
    fontSize: 28,
    color: '#2077f4',
    fontFamily: 'Montserrat-Bold',
  },
  inputContainerStyle: {
    flex: 3,
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    backgroundColor: '#efefef',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#2078f5',
  },
  bottom: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
  errorStyle: {
    fontSize: 12,
    textAlign: 'center',
    color: 'red',
  },
  signUpButton: {
    margin: 0,
    marginLeft: -15,
    marginRight: -15,
    marginTop: 20,
    height: 55,
  },
  signInButtonText: {
    color: '#2078f5',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
