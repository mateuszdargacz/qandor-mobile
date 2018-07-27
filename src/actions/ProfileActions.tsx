import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {API_URL} from '../App';
import {
  GET_PROFILE,
  CLEAR_PROFILE,
} from './types';

export const getProfile = (userID: number) => {
  const data = require('../../assets/data/profile.json');
  return(dispatch: Redux.Dispatch<any>) => {
    // axios.get(`${API_URL}/users/${userID}`)
    //   .then()
    //   .catch((error) => console.log(error));
    dispatch({type: GET_PROFILE, payload: data});
    dispatch(NavigationActions.navigate({routeName: 'Profile'}));
  }
}

export const clearProfile = () => {
  return(dispatch: Redux.Dispatch<any>) => {
    dispatch({type: CLEAR_PROFILE})
  }
}
