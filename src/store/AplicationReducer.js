/* eslint-disable import/prefer-default-export */
import {ActionTypes} from './constants';

const AplicationState = {
  auth: false,
};

export const AplicationReducer = (state = AplicationState, action) => {
  switch (action.type) {
    case ActionTypes.INITIAL_STATE: {
      return {...state, auth: action.payload};
    }
    case ActionTypes.AUTH: {
      return {...state, auth: action.payload};
    }
    default: {
      return state;
    }
  }
};
