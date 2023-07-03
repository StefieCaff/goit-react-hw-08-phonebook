import { createSlice } from '@reduxjs/toolkit';

import { registerUser, logOutUser } from './operators';

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
                console.log(action.payload);
                console.log(state.isLoggedIn);
            })
            .addCase(logOutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
            })
    },
});

export default userSlice.reducer;