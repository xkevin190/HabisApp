import axios from 'axios';
import {ActionTypes} from '../store/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * A ction in charge of login
 * @param {object} data
 * @param {string} data.username  username
 * @param {string} data.password  password
 * @param {callback} callback
 */
export const logout = (data, callback) => (dispatch) => {
  axios
    .post('https://order-pizza-api.herokuapp.com/api/auth', {
      password: data.password,
      username: data.username,
    })
    .then(async (res) => {
      await AsyncStorage.setItem('token ', res.data.access_token);
      dispatch({
        type: ActionTypes.AUTH,
        payload: true,
      });
    })
    .catch((err) => {
      callback(err.response.data.msg);
    });
};

/**
 * check that a user is logged in and execute the initial state
 */
export const veryState = () => async (dispatch) => {
  const token = AsyncStorage.getItem('token');
  dispatch({
    type: ActionTypes.INITIAL_STATE,
    payload: token ? true : false,
  });
};
