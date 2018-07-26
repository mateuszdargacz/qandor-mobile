import {IAction} from './';
import {
  GET_PROFILE,
  CLEAR_PROFILE,
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  userID: '',
  rating: null,
  skills: [],
  aboutMe: '',
  nonprofitWork: '',
  videos: [],
}

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        image: action.payload.image,
        username: action.payload.username,
        job1: action.payload.job1,
        job2: action.payload.job2,
        userID: 0,
        rating: action.payload.rating,
        skills: action.payload.skills,
        aboutMe: action.payload.aboutMe,
        nonprofitWork: action.payload.nonprofitWork,
        videos: action.payload.videos,
      };
    case CLEAR_PROFILE:
      return {...INITIAL_STATE}
    default:
      return state;
  }
}
