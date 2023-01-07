import Loading from "../component/loading";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../component/header";
import Body from "../component/body";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }
    if (isAuthenticated && user) {
        window.localStorage.setItem(
            "user",
            JSON.stringify({
                isAuthenticated: isAuthenticated,
                user: user,
            }),
        );
    }
    if (
        !isAuthenticated &&
        window.localStorage.getItem("user") &&
        window.localStorage.getItem("user") !== ""
    ) {
        const userData = JSON.parse(window.localStorage.getItem("user"));
        return (
            <>
                <Header isLoggedIn={userData.isAuthenticated} user={userData.user} />
                <Body isLoggedIn={userData.isAuthenticated} user={userData.user} />
            </>
        );
    }
    return (
        <>
            <Header isLoggedIn={isAuthenticated} user={user} />
            <Body isLoggedIn={isAuthenticated} user={user} />
        </>
    );
};

export default Home;
