require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function compress(req, res) {
    var objPath = req.body.request.objPath;
    const form = new FormData();
    form.append("image", fs.readFileSync(objPath), "stock-photo.jpg");

    await axios
        .post("https://api.apyhub.com/processor/image/compress/file", form, {
            params: {
                output: req.body.request.outputName,
                quality: req.body.request.quality,
            },
            headers: {
                ...form.getHeaders(),
                "apy-token": process.env.compressToken,
                "content-type": "multipart/form-data",
            },
        })
        .then(async function (response) {
            console.log(JSON.stringify(response.data));
            await res.send({
                success: true,
                data: response.data,
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

exports.execute = compress;