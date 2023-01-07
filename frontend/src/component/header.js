import React from "react";
import Logout from "./logout";
import Login from "./login";
import { Avatar, Grid } from "@mui/material";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Grid container className="shadow" padding={3}>
                    <Grid
                        padding={2}
                        item
                        xs={12}
                        lg={1}
                        className="bg-logo bg-center bg-no-repeat bg-contain h-16"
                    ></Grid>
                    <Grid item xs={12} lg={11} className="h-16">
                        <div className="h-full flex flex-row items-center">
                            <div className="w-full h-full flex flex-col xs:items-center lg:items-end">
                                <div className="h-full xs:w-full lg:w-80 flex-grow flex flex-row items-center text-lg mt-3 mb-3 p-2">
                                    <div
                                        className={
                                            this.props.isLoggedIn && this.props.user
                                                ? "lg:w-30 mr-2 xs:w-1/2"
                                                : "lg:w-30 mr-2 xs:w-0"
                                        }
                                    >
                                        {this.props.isLoggedIn && this.props.user ? (
                                            <div
                                                className="flex-grow flex flex-row items-center"
                                                onClick={() => {
                                                    window.location.href = "/app";
                                                }}
                                            >
                                                <span>
                                                    <Avatar
                                                        alt={this.props.user.name}
                                                        src={this.props.user.picture}
                                                        sx={{ width: 56, height: 56 }}
                                                    />
                                                </span>
                                                <span className="ml-3 truncate">
                                                    Hi, {this.props.user.name}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="w-full"></div>
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.props.isLoggedIn && this.props.user
                                                ? "lg:w-30 mr-2 xs:w-1/2"
                                                : "lg:w-30 mr-2 xs:w-full"
                                        }
                                    >
                                        {this.props.isLoggedIn ? <Logout /> : <Login />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
