import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-router-dom';
import { isLoggedIn, user } from 'redux/users/selectors';
import { logOutUser } from 'redux/users/operators';
import useViewPort from 'utils/hooks';

const HeaderNav = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const loggedIn = useSelector(isLoggedIn);
    const userEmail = useSelector(user);
    const { width } = useViewPort();
    const breakpoint = 319;
 
    return (
        <Box sx={{
            flexGrow: 1,
            
        }}>
            <AppBar position="static">
                <Toolbar>
                { width > breakpoint ? (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >    
                    <Link to={'/'}>
                        <ContactPhoneIcon />
                    </Link>
                        </IconButton>
                    ) : (
                        <></>    
                    )
                }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500, marginBottom: .5}}>
                    <Link to={'/'}>PhoneBook</Link>
                </Typography>
                {loggedIn
                    ? (
                        <>
                            <p style={{ marginRight: 10 }}>
                                {userEmail}
                            </p>
                            <Button
                                color="inherit"
                                onClick={() => dispatch(logOutUser())}
                            >
                                 Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                onClick={() => nav('/login')}
                             >
                                Login
                            </Button>
                            <Button
                                color='inherit'
                                onClick={() => nav('/register')}
                            >
                                Register
                            </Button>      
                        </>        
                    )}
            </Toolbar>
            </AppBar>
        </Box>
    )
};

export default HeaderNav;

