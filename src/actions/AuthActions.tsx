import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {API_URL} from '../App';
import {LOGIN_SUCCESS} from './types';


export const login = (username: string, password: string) => {
  return(dispatch: Redux.Dispatch<any>) => {
    axios.post(API_URL, {username, password})
      .then((response: any) => dispatch({type: LOGIN_SUCCESS}))
      .catch();
  };
};
