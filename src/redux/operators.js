import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk('contact/get',
    async () => {
        try {
            const response = await axios.get('https://6495c988b08e17c91792ad8a.mockapi.io/contacts?sortBy=name')
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
            phone: data.number,
            createdAt: Date.now(), 
        }
        try {
            const response = await axios.post(
                'https://6495c988b08e17c91792ad8a.mockapi.io/contacts',
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
                `https://6495c988b08e17c91792ad8a.mockapi.io/contacts/${id}`,
            
            );
            return(response.data);
        } catch (error) {
            return error;
        }
    }
)