import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {API_URL} from '../App';
import {LOGIN_SUCCESS} from './types';

export const login = (username: string, password: string, remember: boolean) => {
  return(dispatch: Redux.Dispatch<any>) => {
    axios.post(`{API_URL}/login`, {username, password})
      .then((response) => dispatch({type: LOGIN_SUCCESS, payload: response}))
      .catch((error) => console.log(error));
  };
};

export const register = (username: string, password: string, email: string) => {
  return(dispatch: Redux.Dispatch<any>) => {
    axios.post(`{API_URL}/signup`, {username, password, email})
      .then(() => dispatch(NavigationActions.navigate({routeName: 'LoginForm'})))
      .catch((error) => console.log(error));
  };
};
