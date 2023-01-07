import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Auth0LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            onClick={() => loginWithRedirect()}
            style={{ backgroundColor: "red" }}
            className="w-full"
        >
            <span className="p-2 text-white" textalign="center">
                <span>
                    <GoogleIcon fontSize="large" />
                </span>
                <span className="m-5">SIGN IN WITH GOOGLE</span>
            </span>
        </Button>
    );
};

export default Auth0LoginButton;
