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
                console.log(action.payload, 'ap');
                console.log(state.isLoggedIn);
            })
            .addCase(logOutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
                console.log(state.isLoggedIn);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                console.log(action.payload);
                console.log(state.user);
            })
    },
});

export default userSlice.reducer;