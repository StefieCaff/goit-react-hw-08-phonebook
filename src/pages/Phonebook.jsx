import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Notify } from "notiflix";

import { getFilter, getPhonebook } from "redux/contacts/selectors";
import { deleteContacts, getContacts } from "redux/contacts/operators";
import { searchContacts } from "redux/contacts/slice";
import searchFunction from "utils/filter";

import Form from "components/Form";

import { TextField, IconButton, Card, List, ListItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import Container from '@mui/material/Container';

const Phonebook = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getPhonebook)
    const search = useSelector(getFilter);
    const searchedContacts = searchFunction(contacts, search);
    useEffect(() => {
        dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onDelete = (id) => {
        dispatch(deleteContacts(id)).then(() => {
            dispatch(getContacts());
            const deletedContact =searchedContacts.find(searchedContact => searchedContact.id === id)
            Notify.info(`${deletedContact.name} has been deleted from your phonebook`);
            console.log(deletedContact, 'dC');
        });
    };
    
    return (
        <section>
            <Container maxWidth='xs'>
                <h1>Phone Book</h1>
            <Form />
            <Card>
                <label htmlFor="search"></label> 
                <TextField
                    type="text"
                    name='search'
                    onChange={ e => dispatch(searchContacts(e.target.value))}
                    helperText="Search contacts by name or number"
                    id="search"
                    label="Search"
                    aria-describedby="my-helper-text"
                    variant="standard"
                />
                <h3>Contacts</h3>
                {searchedContacts.length > 0 ?
                    <List>
                        {contacts.length > 0 ?
                            searchedContacts.map(contact => (
                                <ListItem key={contact.id}>
                                    <p>{contact.name}</p>
                                    <p>{contact.phone}</p>
                                    <IconButton
                                        onClick={() => onDelete(contact.id)}
                                        aria-label="delete"
                                        size="small">
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </ListItem>
                            ))
                            : <p>There are not any contacts saved yet.</p>
                        }
                    </List>
                    : <p>There are no saved contacts that match your search .</p>}
            </Card>
            </Container>
        </section>
       )
};

export default Phonebook;

