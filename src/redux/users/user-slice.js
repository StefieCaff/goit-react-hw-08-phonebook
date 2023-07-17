import { createSlice } from '@reduxjs/toolkit';

import { registerUser, logOutUser, loginUser } from './operators';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        //* register user assign token    
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUser.pending, state => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.error = action.payload;
                console.log(action.payload, 'error');
            })
        //* logout user
            .addCase(logOutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(logOutUser.pending, state => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(logOutUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.error = action.payload;
                console.log(action.payload, 'error');
            })
        //* login user 
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
            })
            .addCase(loginUser.pending, state => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.error = action.payload;
                console.log(action.payload, 'error');
            })
    },
});

export const authReducer = userSlice.reducer;