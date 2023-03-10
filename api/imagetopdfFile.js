require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function convert(req, res) {
    req = req.body.request;

    var objPath = req.objPath;

    const form = new FormData();
    form.append("file", fs.readFileSync(objPath), "stock-photo.jpg");

    await axios
        .post("https://api.apyhub.com/convert/image-file/pdf-url", form, {
            params: {
                output: req.outputName + ".pdf",
            },
            headers: {
                ...form.getHeaders(),
                "apy-token": process.env.convertorToken,
            },
        })
        .then(async function (response) {
            await res.send({
                success: true,
                data: response.data.data,
                type: ".pdf",
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

exports.execute = convert;
