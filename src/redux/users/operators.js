import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
//action creator for registration
export const registerUser = createAsyncThunk(
  'user/signup',
  async (credentials, thunkAPI) => {
    try {
      //send request
      const response = await axios.post('/users/signup', credentials);
      //manage auth token
      token.set(response.data.token);
      //notify user
      Notify.success("Woot! Registration was a success, in the future your email and password can be used to login")
      return response.data;
    
    } catch (err) {
      // If there is an error during registration, log the error and reject the action with the error value
      console.log('error', err);
      //notify user
      Notify.failure("Sorry, something went wrong with registration, please try again in a minute.")
      return thunkAPI.rejectWithValue(err);
  }
});

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      Notify.success("Woot! Success, you are now logged in")
        return response.data;
    } catch (err) {
      console.log('error', err);
      Notify.failure("Sorry, something went wrong with login, please try again in a minute.")
      return thunkAPI.rejectWithValue(err);
    }
});

export const logOutUser = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post(
      '/users/logout');
    token.unset();
    return 
  } catch (err) {
      console.log('error', err);
    Notify.failure("Sorry, something went wrong with log out, please try again in a minute.")
      return thunkAPI.rejectWithValue(err);
  }
});