import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Welcome = () => {
    const nav = useNavigate();
    return (
        <div>Welcome
            <Button
                variant="contained"
                color="secondary"
                onClick={() => nav('/login')}
            >
                Login
            </Button>          
            <Button
                variant="contained"
                color="secondary"
                onClick={() => nav('/register')}        
            >
                Register
            </Button>
        </div>
    );
};

export default Welcome;