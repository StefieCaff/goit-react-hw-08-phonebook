import { createSlice } from '@reduxjs/toolkit';

//import { signUpUser } from './operators';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers: builder => {
    //     builder.addCase(signUpUser.fulfilled)
    // },
});

export default userSlice.reducer;