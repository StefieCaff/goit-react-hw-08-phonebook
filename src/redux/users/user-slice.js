import { createSlice } from '@reduxjs/toolkit';

import { registerUser, logOutUser, loginUser } from './operators';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
                console.log(action.payload);
                console.log(state.isLoggedIn);
            })
            .addCase(logOutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
                console.log(state.isLoggedIn);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                console.log(action.payload);
                console.log(state.isLoggedIn);
            })
    },
});

export const authReducer = userSlice.reducer;