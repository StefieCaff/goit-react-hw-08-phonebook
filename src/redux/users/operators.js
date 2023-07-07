import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``;
    }
};

export const registerUser = createAsyncThunk("user/register", async data => {
    try {
        const response = await axios.post("/users/register", data);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
});

export const loginUser = createAsyncThunk("user/login", async () => {
    try {
        const response = await axios.post("/users/login");
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
});

export const logOutUser = createAsyncThunk("user/logout", async () => {
    try {
        await axios.post("/users/logout");
        token.unset();
    } catch (error) {
        console.log('error', error);
        return error;
    }
});