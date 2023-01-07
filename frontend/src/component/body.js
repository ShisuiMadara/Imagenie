import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@mui/material";
import React from "react";
import toolsIcon from "../static/tools2.png";
import toolsIcon2 from "../static/tools1.png";
import HomeCard from "./homecard";

const cards = [
    {
        title: "Metadata",
        description: "Extract metadata from your images.",
        color: "#397754",
    },
    {
        title: "Crop Image",
        description: "Crop your image as you wish.",
        color: "#f0a3bc",
    },
    {
        title: "Compress Image",
        description: "Compress image to save space.",
        color: "#70be51",
    },
    {
        title: "Thumbnail",
        description: "Create thumbnails from your image.",
        color: "#eb6b40",
    },
    {
        title: "Watermark",
        description: "Add watermark to your image.",
        color: "#9b45b2",
    },
    {
        title: "Resize",
        description: "Resize your image.",
        color: "#fcde67",
    },
    {
        title: "Convert Image to PDF.",
        description: "Store image as a PDF.",
        color: "#f5cac2",
    },
];

const Trynow = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button variant="outlined" className="shadow w-80 h-14" onClick={() => loginWithRedirect()}>
            Try Now
        </Button>
    );
};

export default class Body extends React.Component {
    render() {
        return (
            <Grid container padding={2}>
                <Grid item xs={12} lg={6}>
                    <Grid container padding={5} spacing={3}>
                        <Grid item xs={12} className="text-4xl font-bold text-black font-serif">
                            We make Image-Editing easy.
                        </Grid>
                        <Grid
                            item
                            marginLeft={2}
                            xs={12}
                            className="text-xl font-light text-black font-serif"
                        >
                            All the tools you’ll need to be more productive and work smarter with
                            documents.
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            marginLeft={2}
                            className="text-4xl font-bold text-black font-serif"
                        >
                            {this.props.isLoggedIn ? (
                                <Button href="/app" variant="outlined" className="shadow w-80 h-14">
                                    Dashboard
                                </Button>
                            ) : (
                                <Trynow />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid padding={5} item xs={12} lg={6}>
                    <div className="p-5 flex flex-row w-full items-center -translate-y-20">
                        <div className="w-1/3 mr-2">
                            <img
                                className="rotate-45 -translate-x-40"
                                src={toolsIcon}
                                alt={"tools"}
                            />
                        </div>
                        <div className="w-2/3 ml-2">
                            <img className="-rotate-12" src={toolsIcon2} alt={"tools"} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid
                            padding={5}
                            marginTop={-15}
                            item
                            xs={12}
                            className="font-serif text-4xl font-semibold"
                        >
                            Our services:
                        </Grid>
                        {cards.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index} padding={2}>
                                    <HomeCard
                                        title={item.title}
                                        desc={item.description}
                                        color={item.color}
                                        loggedIn={this.props.isLoggedIn}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
