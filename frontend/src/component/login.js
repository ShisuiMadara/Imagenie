import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button onClick={() => loginWithRedirect()} className="shadow w-full">
            <div className="flex flex-row h-12 items-center">
                <div className="mr-2">
                    <LoginIcon />
                </div>
                <div>Login</div>
            </div>
        </Button>
    );
};

export default Login;
