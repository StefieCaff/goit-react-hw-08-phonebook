import { createSlice } from '@reduxjs/toolkit';

//import { registerUser } from './operators';

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
    //     builder.addCase(registerUser.fulfilled)
    // },
});

export default userSlice.reducer;