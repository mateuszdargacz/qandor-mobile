import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {API_URL} from '../App';
import {GET_MESSAGES} from './types';

export const getMessages = (group: any) => {
  return(dispatch: Redux.Dispatch<any>) => {
    axios.get(`${API_URL}/messages/${group}/`)
      .then((response) => dispatch({type: GET_MESSAGES, payload: response.data}))
      .then(() => dispatch(NavigationActions.navigate({routeName: 'Chat'})))
      .catch(() => dispatch(NavigationActions.navigate({routeName: 'Chat'})));
      // .catch((error) => console.log(error));
  };
};

export const sendMessage = (message: any, group: any) => {
  return(dispatch: Redux.Dispatch<any>) => {
    axios.post(`${API_URL}/messages/${group}/`, {message})
      .then()
      .catch((error) => console.log(error));
  };
};
