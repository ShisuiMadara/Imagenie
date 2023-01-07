import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
const Logout = () => {
    const { logout } = useAuth0();
    return (
        <Button
            onClick={() => {
                window.localStorage.clear();
                logout({
                    returnTo: window.location.origin,
                });
            }}
            className="shadow w-full"
        >
            <div className="flex flex-row h-12 items-center">
                <div className="mr-2">
                    <LogoutIcon />
                </div>
                <div>Logout</div>
            </div>
        </Button>
    );
};
export default Logout;
