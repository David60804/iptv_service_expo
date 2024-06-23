// slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../components/axiosInstance';
import { Alert } from 'react-native';
//import axios from 'axios';

// Define the initial state
const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

// Define the login async thunk
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axiosInstance.post('/login.php', credentials);
  return response.data;
});

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
