import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {API_URL} from '../App';
import {
  GET_TEAM,
} from './types';

export const getTeam = () => {
  const data = require('../../assets/data/team.json');
  return(dispatch: Redux.Dispatch<any>) => {
    // axios.get(`${API_URL}/users/${userID}`)
    //   .then()
    //   .catch((error) => console.log(error));
    dispatch({type: GET_TEAM, payload: data});
  }
}
