import { Grid } from "@mui/material";
import DashCard from "../component/dashcard";
import compress from "../static/compress.png";
import Header from "../component/header";

const cards = [
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
    },
];

const Dashboard = () => {
    const userData = JSON.parse(window.localStorage.getItem("user"));
    if (!userData || !userData.isAuthenticated || !userData.user) {
        window.sessionStorage.clear();
        window.location.href = "/";
    }
    return (
        <div>
            <Header isLoggedIn={userData.isAuthenticated} user={userData.user} />
            <Grid container padding={{ xs: 1, md: 3, lg: 5 }} marginTop={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <DashCard title="test" description="test" image={cards[0].image} config={[]} requestURL="test" />
                </Grid>
            </Grid>
        </div>
    );
};
export default Dashboard;
