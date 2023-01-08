import { Button, Grid, Input, TextField } from "@mui/material";
import DashCard from "../component/dashcard";
import compress from "../static/compress.png";
import Header from "../component/header";
import crop from "../static/crop.png";
import imagetopdf from "../static/imagetopdf.png";
import metadata from "../static/metadata.png";
import resize from "../static/resize.png";
import thumbnail from "../static/thumbnail.png";
import watermark from "../static/watermark.png";
import axios from "axios";

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
        title: "Crop",
        description: "Crop your image.",
        image: crop,
        forms: [
            {
                requestURL: "http://localhost:5000/api/cropFile",
                required: ["file", "height", "width", "outname"],
                objectToName: {
                    file: "objPath",
                    outname: "outputName",
                    height: "height",
                    width: "width",
                },
                config: [
                    {
                        title: "select a file",
                        type: "file",
                        name: "file",
                        min: 1,
                        max: 1,
                    },
                    {
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                    {
                        title: "Enter required height",
                        type: "number",
                        name: "height",
                    },
                    {
                        title: "Enter required width",
                        type: "number",
                        name: "width",
                    },
                ],
            },
        ],
    },
    {
        title: "Image to PDF",
        description: "Convert your image to PDF.",
        image: imagetopdf,
        forms: [
            {
                requestURL: "http://localhost:5000/api/imagetopdfFile",
                required: ["file", "outname"],
                objectToName: {
                    file: "objPath",
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
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Extract metadata",
        description: "Extract metadata of your image.",
        image: metadata,
        forms: [
            {
                requestURL: "http://localhost:5000/api/metadataFile",
                required: ["file", "outname"],
                objectToName: {
                    file: "objPath",
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
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                ],
            },
        ],
    },
    {
        title: "Resize",
        description: "Resize your image.",
        image: resize,
        forms: [
            {
                requestURL: "http://localhost:5000/api/resizeFile",
                required: ["file", "height", "width", "outname"],
                objectToName: {
                    file: "objPath",
                    height: "height",
                    width: "width",
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
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                    {
                        title: "Enter required height",
                        type: "number",
                        name: "height",
                    },
                    {
                        title: "Enter required width",
                        type: "number",
                        name: "width",
                    },
                ],
            },
        ],
    },
    {
        title: "Thumbnail",
        description: "Create a thumbnail of your image.",
        image: thumbnail,
        forms: [
            {
                requestURL: "http://localhost:5000/api/thumbnailFile",
                required: ["file", "height", "width", "outname"],
                objectToName: {
                    file: "objPath",
                    height: "height",
                    width: "width",
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
                        title: "Enter output Filename",
                        type: "text",
                        name: "outname",
                    },
                    {
                        title: "Enter required height",
                        type: "number",
                        name: "height",
                    },
                    {
                        title: "Enter required width",
                        type: "number",
                        name: "width",
                    },
                ],
            },
        ],
    },
    {
        title: "Watermark",
        description: "Add watermark to your image",
        image: watermark,
        forms: [
            {
                requestURL: "http://localhost:5000/api/watermarkFile",
                required: ["file", "watermark", "outname"],
                objectToName: {
                    file: "objPath",
                    watermark: "waterPath",
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
                        title: "select a watermark",
                        type: "file",
                        name: "watermark",
                        min: 1,
                        max: 1,
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
    const sendSms = (event) => {
        event.preventDefault();
        const request = {
            phone: event.target.phone.value,
        };
        if (request.phone == null || request.phone === undefined || request.phone === "") {
            alert("Invalid phone number.");
        } else {
            axios
                .post("http://localhost:5000/api/sendsms", request)
                .then((res) => {
                    if (res.data.success) {
                        alert("Message sent successfully.");
                    } else {
                        alert("Unable to send message, please try again later.");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const sendWhatsapp = (event) => {
        event.preventDefault();
        const request = {
            phone: event.target.phone.value,
        };
        if (request.phone == null || request.phone === undefined || request.phone === "") {
            alert("Invalid phone number.");
        } else {
            axios
                .post("http://localhost:5000/api/sendWhatsapp", request)
                .then((res) => {
                    if (res.data.success) {
                        alert("Message sent successfully.");
                    } else {
                        alert("Unable to send message, please try again later.");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
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
                <Grid item xs={12} md={6} justifyContent="center">
                    <form onSubmit={sendSms}>
                        <TextField
                            name="phone"
                            className="w-2/3 shadow"
                            type="text"
                            placeholder="+91-(XXX)-(XXX)-(XXXX)"
                            label="Phone"
                            variant="outlined"
                        />
                        <Button type="submit" className="w-1/3 shadow" style={{ padding: 15 }}>
                            <div className="w-full truncate">Send SMS</div>
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} justifyContent="center">
                    <form onSubmit={sendWhatsapp}>
                        <TextField
                            name="phone"
                            className="w-2/3 shadow"
                            type="phone"
                            placeholder="+91-(XXX)-(XXX)-(XXXX)"
                            label="Phone"
                            variant="outlined"
                        />
                        <Button type="submit" className="w-1/3 shadow" style={{ padding: 15 }}>
                            <div className="w-full truncate">Send Whatsapp Message</div>
                        </Button>
                    </form>
                </Grid>
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
