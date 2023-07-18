import { Button, Card, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/users/operators';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const nav = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData))
            .then(() => {
                nav('/phonebook')
            })
            .catch((error) => {
                console.error('registration failed', error);
                nav('/')
        })
    };

    return (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '100px 0px'
            }}
        >
            <Card sx={{ padding: '20px 30px' }}>
                <h1 className='h1-style'>Register</h1>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                    onSubmit={handleSubmit}
                    
                >
                     <label htmlFor='name'></label>
                    <TextField sx={{ margin: '5px' }}
                        name="name"
                        value={formData.name}
                        onChange={e =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                        label="Full name"
                        type="text"
                        required
                        fullWidth={true}
                        id="name"
                        aria-describedby="Please enter your name"
                        variant="standard"
                    />
                    <label htmlFor='email'></label>
                    <TextField sx={{ margin: '5px' }}
                        name="email"
                        value={formData.email}
                        onChange={e =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                        label="Email"
                        type="email"
                        required
                        fullWidth={true}
                        id="email"
                        aria-describedby="Please enter your email"
                        variant="standard"
                    />
                    <label htmlFor='password'></label>
                    <TextField sx={{ margin: '5px' }}
                        name="password"
                        value={formData.password}
                        onChange={e =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                        label="Password"
                        type="password"
                        required
                        fullWidth={true}
                        id="password"
                        aria-describedby="Please enter your password"
                        variant="standard"
                        autoComplete='true'
                    />
                    <div style={{margin: '15px 30px'}}>
                        <Button sx={{margin: '0 20px 0 0'}} type="submit" variant="contained">
                            Continue
                        </Button>
                        <Link to={'/login'}>
                            <Button color="secondary">Login</Button>
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Register;
