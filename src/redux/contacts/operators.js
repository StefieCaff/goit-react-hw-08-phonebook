import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk('contact/get',
    async () => {
        try {
            const response = await axios.get('/contacts')
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const postContacts = createAsyncThunk('contact/post',
    async (data) => {
        const newContact = {
            name: data.name,
            number: data.number, 
        }
        try {
            const response = await axios.post(
                '/contacts',
                newContact
            );
            return(response.data);
        } catch (error) {
            return error;
        }
    }
);

export const deleteContacts = createAsyncThunk('contacts/delete',
    async (id) => {
        try {
            const response = await axios.delete(
                `/contacts/${id}`,
            );
            return(response.data);
        } catch (error) {
            return error;
        }
    }
)