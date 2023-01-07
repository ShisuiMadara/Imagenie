import { Grid } from "@mui/material";
import DashCard from "../component/dashcard";
import compress from "../static/compress.png";
import Header from "../component/header";

const cards = [
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Compress",
        description: "Compress your image.",
        image: compress,
        forms: [
            {
                requestURL: "http://localhost:5000/api/compressFile",
                required: ["file", "quality", "outname"],
                objectToName: {
                    file: "objPath",
                    quality: "quality",
                    outname: "outputName",
                },
                config: [
                    {
                        title: "select a file to compress",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Select compression quality",
                        type: "number",
                        name: "quality",
                        min: 1,
                        max: 99,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
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
            <Grid
                container
                padding={{ xs: 1, md: 3, lg: 5 }}
                marginTop={3}
                spacing={2}
                justifyContent="center"
            >
                {cards.map((item, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={`card#${index}`}>
                            <DashCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                forms={item.forms}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};
export default Dashboard;
