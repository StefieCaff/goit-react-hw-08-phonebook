import { Button, Card, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '100px 0px'
            }}
        >
            <Card sx={{ padding: '20px 20px' }}>
                <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <label htmlFor='email'></label>
                    <TextField sx={{ margin: '5px' }}
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
                        label="Password"
                        type="password"
                        required
                        fullWidth={true}
                        id="password"
                        aria-describedby="Please enter your password"
                        variant="standard"
                        autoComplete='true'
                    />
                    <div style={{margin: '10px 15px'}}>
                        <Button sx={{margin: '0 10px 0 0'}}type="submit" variant="contained">
                            Continue
                        </Button>
                        <Link to={'/signup'}>
                            <Button color="secondary">Sign up</Button>
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Login;
