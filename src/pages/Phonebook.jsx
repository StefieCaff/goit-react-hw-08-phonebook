import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Notify } from "notiflix";

import { getFilter } from "redux/contacts/selectors";
import { getPhonebook } from "redux/contacts/selectors";
import { deleteContacts, getContacts } from "redux/contacts/operators";
import { searchContacts } from "redux/contacts/slice";
import searchFunction from "utils/filter";

import Form from "components/Form";

import { TextField, IconButton, Card, List, ListItem, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import Container from '@mui/material/Container';

const Phonebook = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getPhonebook);
    console.log(contacts);
    const search = useSelector(getFilter);
    const [searchedContacts, setSearchedContacts] = useState(contacts);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])
    
    useEffect(() => {
        // Update searchedContacts whenever contacts or search changes
        if (search) {
            const filteredContacts = searchFunction(contacts, search);
            setSearchedContacts(filteredContacts);
        }
        else {
            // If search is empty, reset searchedContacts to all contacts
            setSearchedContacts(contacts);
        }
    },[contacts, search])

    const onDelete = (id) => {
        dispatch(deleteContacts(id)).then(() => {
            // Notify info after the delete is successful
            const deletedContact = searchedContacts.find(
                searchedContact => searchedContact.id === id
            );
            Notify.info(
                `${deletedContact.name} has been deleted from your phonebook
            `);

            // After delete is successful, dispatch getContacts to refresh the contacts list
            dispatch(getContacts());
        });
    };

    return (
        <section>
            <Container maxWidth='xs'>
                <Form />
                <Card sx={{ padding: '10px 15px' }}>
                    <label htmlFor="search"></label>
                    <TextField
                        type="text"
                        name='search'
                        onChange={e => dispatch(searchContacts(e.target.value))}
                        helperText="Search contacts by name or number"
                        id="search"
                        label="Search"
                        aria-describedby="my-helper-text"
                        variant="standard"
                        fullWidth={true}
                    />
                    <h3 style={{ margin: '10px 0px' }}>Contacts</h3>
                    {contacts.length > 0 ? (
                    <List>
                        {searchedContacts.length > 0 ? (
                            searchedContacts.map(contact => (
                                <ListItem key={contact.id}>
                                    <IconButton
                                        onClick={() => onDelete(contact.id)}
                                        aria-label="delete"
                                        size="small"
                                        sx={{marginRight: 1}}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    <Typography  variant="Subtitle2" sx={{marginRight: 2}}>{contact.name}</Typography>
                                    <Typography variant="subtitle1">{contact.number}</Typography>
                                    
                                </ListItem>
                            ))
                        ) : (
                            <p style={{ margin: '5px' }}>
                                There are no saved contacts that match your search .
                            </p>
                            )}
                    </List>
                   ) : (
                        <p style={{ margin: '5px' }}>
                            There are not any contacts saved yet.
                        </p>
                   )}
                </Card>
            </Container>
        </section>
    );
};

export default Phonebook;

