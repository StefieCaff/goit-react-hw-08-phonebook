import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    const nav = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >    
                    <Link to={'/'}>
                        <ContactPhoneIcon />
                    </Link>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Phonebook
                </Typography>
                <Button
                    color="inherit"
                    onClick={() => nav('/login')}
                >Login
                </Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
};

export default HeaderNav;

