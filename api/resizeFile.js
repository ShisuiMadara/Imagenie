require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function resize(req, res) {
    req = req.body.request;

    var objPath = req.objPath;

    const form = new FormData();
    form.append("image", fs.readFileSync(objPath), "stock-photo.jpg");

    await axios
        .post("https://api.apyhub.com/processor/image/resize/file/urls", form, {
            params: {
                output: req.outputName + ".png",
                width: req.width,
                height: req.height,
            },
            headers: {
                ...form.getHeaders(),
                "apy-token": process.env.resizeToken,
            },
        })
        .then(async function (response) {
            await res.send({
                success: true,
                data: response.data.data,
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

exports.execute = resize;
