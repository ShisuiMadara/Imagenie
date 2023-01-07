import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const Trynow = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
            className="shadow w-full h-14"
            onClick={() => loginWithRedirect()}
        >
            Try Now
        </Button>
    );
};
const HomeCard = (props) => {
    return (
        <div
            className="flex flex-col p-7 text-white rounded-2xl font-serif"
            style={{ backgroundColor: props.color }}
        >
            <div className="text-4xl ml-2 mb-4 truncate">{props.title}</div>
            <div className="text-lg ml-2 truncate mb-6">{props.desc}</div>
            <div className="mb-4 flex flex-col w-full items-center">
                {props.loggedIn ? (
                    <Button
                        href="/app"
                        variant="outlined"
                        className="shadow w-full h-14"
                        style={{ color: "white", borderColor: "white" }}
                    >
                        Dashboard
                    </Button>
                ) : (
                    <Trynow />
                )}
            </div>
        </div>
    );
};
export default HomeCard;
