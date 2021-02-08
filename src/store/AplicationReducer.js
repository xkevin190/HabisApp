/* eslint-disable import/prefer-default-export */
import {ActionTypes} from './constants';

const AplicationState = {
  auth: false,
};

export const AplicationReducer = (state = AplicationState, action) => {
  switch (action.type) {
    case ActionTypes.INITIAL_STATE: {
      return {...state};
    }
    default: {
      return state;
    }
  }
};
