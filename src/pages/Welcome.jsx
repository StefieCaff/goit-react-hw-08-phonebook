import { useNavigate } from "react-router-dom";
import { Button, Card, Container } from "@mui/material";

const Welcome = ({className}) => {
    const nav = useNavigate();
    return (
        <section className={className}>
            <Container maxWidth='xs'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}
            >
                <h1 className='h1-style'>Welcome to PhoneBook!</h1>
                <Card sx={{
                    padding: '10px 15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    
                    <h2>Keep your contact's information secure</h2>
                    <p>Registered? Use an email and password to login!</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => nav('/login')}
                    >
                    Login
                    </Button>
                    <p>New to PhoneBook? Register to create an account.</p>         
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => nav('/register')}        
                    >
                    Register
                    </Button>
                </Card>
            </Container>
        </section>
    );
};

export default Welcome;