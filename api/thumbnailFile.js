require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function thumbnail(req, res) {
    req = req.body.request;

    var objPath = req.objPath;

    const form = new FormData();
    form.append("image", fs.readFileSync(objPath), "stock-photo.jpg");

    await axios
        .post("https://api.apyhub.com/generate/image/thumbnail/file/url", form, {
            params: {
                output: req.outputName + ".png",
                width: req.width,
                height: req.height,
            },
            headers: {
                ...form.getHeaders(),
                "apy-token": process.env.thumbnailToken,
            },
        })
        .then(async function (response) {
            console.log(JSON.stringify(response.data));
            await res.send({
                success: true,
                data: response.data,
                type: ".png",
            });
        })
        .catch(function (error) {
            console.log(error);

            res.send({
                success: false,
                data: error,
            });
        });
}

exports.execute = thumbnail;
