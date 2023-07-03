import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix';

import { getContacts, postContacts } from 'redux/operators';
import { getPhonebook } from 'redux/selectors';

import { TextField, Button, Card } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    });
    const dispatch = useDispatch();
    const contacts = useSelector(getPhonebook);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '' || formData.number === '') {
            return
        }
        const existingName = contacts.some(
            contact => contact.name === formData.name
        );
        const existingNumber = contacts.some(
            contact => contact.phone === formData.number
        );
        if (existingName) {
            Notify.warning(`${formData.name} is already in your contact list`);
            return;
        } else if (existingNumber) {
            Notify.warning(`${formData.number} is already in your contact list`);
            return;
        }
        dispatch(postContacts(formData)).then(() => {
            dispatch(getContacts());
            setFormData({
                name: '',
                number: ''
            })
            Notify.success(`${formData.name} has been added to your phonebook.`)
        });
    };

    return (
        <section>
            <Card>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name"></label> 
                <TextField
                type="text"
                name='name'
                value={formData.name}
                onChange={e => 
                    setFormData(prev => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
                pattern="[A-Za-z\- ]{1,30}"
                title="Name must contain minimum 1, maximum 30 characters. In this case characters include Upper and lowercase letters, apostrophe with following letter, and a max of two spaces between characters. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                fullWidth={true}
                id="name"
                label="Name"
                aria-describedby="Please enter your name"
                variant="standard"
                />
            <label htmlFor='number'></label>
            <TextField
                type="tel"
                name='number'
                value={formData.number}
                onChange={e => 
                    setFormData(prev => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
                pattern="[0-9\s+\-]{6,19}"
                title="Phone number must be at least 6 digits max 19 digits. In this case digits include single spaces between numbers, dashes, parentheses and number can start with +"
                required
                fullWidth={true}
                id="number"
                label="Number"
                aria-describedby="Please enter your number"
                variant="standard"
            />    
            <Button color="secondary" fullWidth={true} aria-label="add-contact button" type='submit' variant="outlined" endIcon={<AddIcon/>}>
                Add
            </Button>
          
            </form></Card></section>
    
    )
};

export default Form;