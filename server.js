var express = require("express");
var cookieSession = require("cookie-session");
const { auth, requiresAuth } = require("express-openid-connect");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var dotenv = require("dotenv");
// load env variables
dotenv.config();
// configure server for logging.
app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        secret: process.env.SECRET || "TeStStRiNg321",
        baseURL: "http://localhost:5000",
        clientID: "mRi1pjQK6CLcRMyRJJ526bTUO2RBfwCH",
        issuerBaseURL: "https://dev-wbsnn6gxoptvpdpg.us.auth0.com",
    }),
);
app.use(
    cookieSession({
        name: "session",
        keys: [process.env.PRIVATE_KEY || "lama"],
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }),
);
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(
    cors({
        credentials: true,
    }),
);
app.use(bodyParser.json());
app.set("view engine", "ejs");

// accept all requests
app.all("*", async (req, res, func) => {
    const regex = /[/]api[/]/g;
    console.log(`Incoming request from ${req.ip} to ${req.url}`);
    if (regex.test(req.url)) {
        try {
            const url = req.url;
            var path = "";
            for (var i = 0; i < url.length && url[i] !== "?"; i++) {
                path += url[i];
            }
            console.log(`Loading .${path}`);
            var api = require(`.${path}`);
            try {
                console.log(`Executing .${path}`);
                await api.execute(req, res);
                console.log(`Unloading .${path}`);
                delete require.cache[require.resolve(`.${path}`)];
            } catch (err) {
                console.log(`Error: ${err.message}`);
            }
        } catch (err) {
            console.log(`Failed to load .${req.url} ! \n error: ${err.message}`);
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    } else {
        console.log(req.url);
        if (req.url === "/") {
            if (req.oidc.isAuthenticated()) {
                res.redirect("http://localhost:3000/app");
            } else {
                res.redirect("http://localhost:3000/");
            }
        } else if (req.url === "/profile") {
            if (requiresAuth()) {
                res.send(JSON.stringify(req.oidc.user));
            }
        } else {
            res.status(404).json({
                success: false,
                message: "Page not found ! ",
            });
        }
    }
});
// run server.
const port = process.env.API_PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server Running at port: ${port}`);
});

// to prevent server from crashing.
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
});
