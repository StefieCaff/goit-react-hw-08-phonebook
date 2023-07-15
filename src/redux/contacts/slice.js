import { createSlice } from "@reduxjs/toolkit";

import { getContacts, postContacts, deleteContacts } from "./operators";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const contactsSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        searchContacts: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: builder => {
        //* Get contacts from API/db
        builder.addCase(getContacts.pending, state => {
            state.contacts.isLoading = true;
        })
            .addCase(getContacts.fulfilled, (state, action) => {
            console.log(action.payload, 'ap');
            state.contacts.isLoading = false;
            state.contacts.items = action.payload;
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
        })
        //* Add contacts to db
        .addCase(postContacts.pending, state => {
            state.contacts.isLoading = true;
        })
        .addCase(postContacts.fulfilled, (state/*, action */) => {
            state.contacts.isLoading = false;
            //* state.contacts.items.push(action.payload); option to handle add contact here instead of with .then() in the <form/>
        })
        .addCase(postContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
        })
        //*Delete contacts from db
        .addCase(deleteContacts.pending, state => {
            state.contacts.isLoading = true;
        })
        .addCase(deleteContacts.fulfilled, (state/*, action */) => {
            state.contacts.isLoading = false;
            //* state.contacts.items.push(action.payload); option to handle add contact here instead of with .then() in the <form/>
        })
        .addCase(deleteContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
        })
    },
    
});

export const { searchContacts } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer;

