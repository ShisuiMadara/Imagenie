require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function crop(req, res) {
    req = req.body.request;

    var objPath = req.objPath;

    const form = new FormData();
    form.append("image", fs.readFileSync(objPath), "stock-photo.jpg");

    await axios
        .post("https://api.apyhub.com/processor/image/metadata/file", form, {
            headers: {
                ...form.getHeaders(),
                "apy-token": process.env.metaToken,
            },
        })
        .then(async function (response) {
            await res.send({
                success: true,
                data:
                    "data:text/json;charset=utf-8," +
                    encodeURIComponent(JSON.stringify(response.data)),
                type: ".json",
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

exports.execute = crop;
