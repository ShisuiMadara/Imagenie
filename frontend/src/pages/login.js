import react from "react";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { Button, Chip, Divider, Grid } from "@mui/material";
import logo from "../static/logo.png";

const validators = {
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+/gi,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi,
};

export default class Login extends react.Component {
    handleSubmit = (event) => {
        event.preventDefault();
    };
    togglePasswordView = () => {
        this.setState({
            isPassVisible: !this.state.isPassVisible,
        });
    };
    handleEmailChange = (event) => {
        if (
            event.target.value == null ||
            event.target.value === undefined ||
            event.target.value === ""
        ) {
            this.setState({
                isEmailValid: false,
            });
        } else {
            const matches = event.target.value.toString().match(validators[event.target.name]);
            if (matches == null || matches === undefined || matches.length !== 1) {
                this.setState({
                    isEmailValid: false,
                });
            } else {
                this.setState({
                    isEmailValid: true,
                });
            }
        }
    };
    handlePasswordChange = (event) => {
        if (
            event.target.value == null ||
            event.target.value === undefined ||
            event.target.value === ""
        ) {
            this.setState({
                isPasswordValid: false,
            });
        } else {
            const matches = event.target.value.toString().match(validators[event.target.name]);
            if (matches == null || matches === undefined || matches.length !== 1) {
                this.setState({
                    isPasswordValid: false,
                });
            } else {
                this.setState({
                    isPasswordValid: true,
                });
            }
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            isPassVisible: false,
            isPasswordValid: false,
            isEmailValid: false,
        };
    }
    render(props) {
        return (
            <div className="flex flex-row bg-login items-center h-screen bg-cover bg-no-repeat">
                <div className="flex-grow flex flex-col items-center backdrop-blur">
                    <div className="flex-grow">
                        <form onSubmit={this.handleSubmit}>
                            <Grid
                                container
                                paddingLeft={{ xs: 3, sm: 5 }}
                                paddingRight={{ xs: 3, sm: 5 }}
                                paddingTop={10}
                                paddingBottom={10}
                                className="bg-white rounded-lg bg-opacity-90 max-w-lg"
                            >
                                <Grid item xs={12} marginBottom={4} padding={{ xs: 1, sm: 2 }}>
                                    <div className="flex flex-col items-center">
                                        <img src={logo} className="h-20" alt="Imagenie" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }} textAlign="center">
                                    <Button
                                        href="http://localhost:5000/api/auth"
                                        style={{ backgroundColor: "red" }}
                                        className="w-full"
                                    >
                                        <span className="p-2 text-white" textAlign="center">
                                            <span>
                                                <GoogleIcon fontSize="large" />
                                            </span>
                                            <span className="m-5">SIGN IN WITH GOOGLE</span>
                                        </span>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <Divider>
                                        <Chip label="OR" />
                                    </Divider>
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <TextField
                                        onChange={this.handleEmailChange}
                                        className="w-full"
                                        label="Email"
                                        variant="outlined"
                                        name="email"
                                        placeholder="user@imagenie.com"
                                    />
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <TextField
                                        onChange={this.handlePasswordChange}
                                        className="sm:w-10/12 xs:w-full"
                                        type={
                                            this.state.isPassVisible === false ? "password" : "text"
                                        }
                                        label="Password"
                                        variant="outlined"
                                        name="password"
                                        placeholder={
                                            this.state.isPassVisible === false
                                                ? "********"
                                                : "P@$$word"
                                        }
                                    />
                                    <Button
                                        className="sm:w-2/12 xs:w-full"
                                        style={{ padding: 16 }}
                                        onClick={this.togglePasswordView}
                                    >
                                        {this.state.isPassVisible === false ? (
                                            <VisibilityOffIcon className="text-black" />
                                        ) : (
                                            <VisibilityIcon className="text-black" />
                                        )}
                                    </Button>
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <Button
                                        className="w-full"
                                        style={{
                                            backgroundColor:
                                                this.state.isPasswordValid &&
                                                this.state.isEmailValid
                                                    ? "red"
                                                    : "lightgray",
                                        }}
                                        disabled={
                                            this.state.isPasswordValid && this.state.isEmailValid
                                                ? false
                                                : true
                                        }
                                    >
                                        <span className="p-3 text-white">Login</span>
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
