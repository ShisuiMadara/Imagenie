var axios = require("axios");
require("dotenv").config();

//reads link output file

async function crop(req, res) {
    req = req.body.request;

    console.log(req);

    var config = {
        method: "post",
        url: "https://api.apyhub.com/convert/image-url/pdf-url",
        params: {
            output: req.outputName + ".pdf",
        },
        headers: {
            "apy-token": process.env.convertorToken,
        },
        data: req,
    };

    await axios(config)
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

exports.execute = crop;
