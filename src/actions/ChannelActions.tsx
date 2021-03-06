import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {API_URL} from '../App';
import {
  GET_CHANNELS,
} from './types';

export const getChannels = () => {
  const data = require('../../assets/data/channels.json');
  return(dispatch: Redux.Dispatch<any>) => {
    // axios.get(`${API_URL}/channels/`)
    //   .then()
    //   .catch((error) => console.log(error));
    dispatch({type: GET_CHANNELS, payload: data});
  }
}
