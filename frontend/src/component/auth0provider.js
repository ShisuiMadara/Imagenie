import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderContainer = ({ children }) => {
    const domain = process.env.REACT_APP_DOMAIN;
    const clientId = process.env.REACT_APP_CLIENT_ID;

    const onRedirectCallback = (appState) => {
        setTimeout(console.log(appState), 5000);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderContainer;
