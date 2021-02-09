/* eslint-disable import/prefer-default-export */
import { ActionTypes } from './constants';

const AplicationState = {
  auth: false,
  order: []
};

export const AplicationReducer = (state = AplicationState, action) => {
  switch (action.type) {
    case ActionTypes.INITIAL_STATE: {
      return { ...state, auth: action.payload };
    }
    case ActionTypes.AUTH: {
      return { ...state, auth: action.payload };
    }

    case ActionTypes.GET_ORDER: {
      return { ...state, order: action.payload }
    }
    case ActionTypes.DELETE_ORDER: {
      console.log('entro en este reducer')
      const orders = state.order.filter((order => {
        return action.payload !== order.Order_ID
      }))

      console.log("aquii", orders)

      return { ...state, order: orders.slice() }
    }
    default: {
      return state;
    }
  }
};
