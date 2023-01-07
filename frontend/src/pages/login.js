import react from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { Button, Chip, Divider, Grid, Tab, Tabs } from "@mui/material";
import logo from "../static/logo.png";
import NotificationDrop from "../component/NotificationDrop";
import Auth0LoginButton from "../component/auth0button";

const validators = {
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+/gi,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi,
    name: /([A-Z a-z]+)/gi,
    username: /([A-Za-z0-9@.#$!&^+_=`~?"';:]+)/gi,
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
    handleNameChange = (event) => {
        if (
            event.target.value == null ||
            event.target.value === undefined ||
            event.target.value === ""
        ) {
            this.setState({
                isNameValid: false,
            });
        } else {
            const matches = event.target.value.toString().match(validators[event.target.name]);
            if (matches == null || matches === undefined || matches.length !== 1) {
                this.setState({
                    isNameValid: false,
                });
            } else {
                this.setState({
                    isNameValid: true,
                });
            }
        }
    };
    handleUsernameChange = (event) => {
        if (
            event.target.value == null ||
            event.target.value === undefined ||
            event.target.value === ""
        ) {
            this.setState({
                isUsernameValid: false,
            });
        } else {
            const matches = event.target.value.toString().match(validators[event.target.name]);
            if (matches == null || matches === undefined || matches.length !== 1) {
                this.setState({
                    isUsernameValid: false,
                });
            } else {
                this.setState({
                    isUsernameValid: true,
                });
            }
        }
    };
    notificationTimeoutAction = () => {
        this.setState({
            Notification: "",
            NotificationType: "",
        });
    };
    toggleMode = () => {
        this.setState({
            mode: 1 - this.state.mode,
        });
    };
    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            Notification: "",
            NotificationType: "",
            isPassVisible: false,
            isPasswordValid: false,
            isEmailValid: false,
            isNameValid: false,
            isUsernameValid: false,
        };
    }
    render() {
        return (
            <div className="flex flex-row bg-login items-center h-screen bg-cover bg-no-repeat">
                <div className="flex-grow flex flex-col items-center backdrop-blur">
                    <NotificationDrop
                        timeout={5000}
                        timeoutFn={this.notificationTimeoutAction}
                        type={this.state.NotificationType}
                        message={this.state.Notification}
                    />
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
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }} textalign="center">
                                    <Auth0LoginButton />
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <Divider>
                                        <Chip label="OR" />
                                    </Divider>
                                </Grid>
                                <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                    <Tabs
                                        className="w-full"
                                        value={this.state.mode}
                                        onChange={this.toggleMode}
                                        aria-label="basic tabs example"
                                    >
                                        <Tab className="w-1/2" label="Login" />
                                        <Tab className="w-1/2" label="Sign up" />
                                    </Tabs>
                                </Grid>
                                {this.state.mode === 1 ? (
                                    <>
                                        <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                            <TextField
                                                onChange={this.handleNameChange}
                                                className="w-full"
                                                label="Name"
                                                variant="outlined"
                                                name="Name"
                                                placeholder="Tejaswi Bishnoi"
                                            />
                                        </Grid>
                                        <Grid item xs={12} padding={{ xs: 1, sm: 2 }}>
                                            <TextField
                                                onChange={this.handleUsernameChange}
                                                className="w-full"
                                                label="Username"
                                                variant="outlined"
                                                name="username"
                                                placeholder="ghostfacegangsta"
                                            />
                                        </Grid>
                                    </>
                                ) : (
                                    <></>
                                )}
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
                                        type="submit"
                                        className="w-full"
                                        style={{
                                            backgroundColor:
                                                this.state.isPasswordValid &&
                                                this.state.isEmailValid &&
                                                (this.state.mode === 0 ||
                                                    (this.state.isNameValid &&
                                                        this.state.isUsernameValid))
                                                    ? "red"
                                                    : "lightgray",
                                        }}
                                        disabled={
                                            this.state.isPasswordValid &&
                                            this.state.isEmailValid &&
                                            (this.state.mode === 0 ||
                                                (this.state.isNameValid &&
                                                    this.state.isUsernameValid))
                                                ? false
                                                : true
                                        }
                                    >
                                        <span className="p-3 text-white">
                                            {this.state.mode === 0 ? "Login" : "Sign up"}
                                        </span>
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {}
}
