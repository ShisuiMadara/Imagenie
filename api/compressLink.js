var axios = require("axios");
require("dotenv").config();

//reads link output file

async function compress(req, res) {
    req = req.body.request;

    console.log(req);

    var config = {
        method: "post",
        url: "https://api.apyhub.com/processor/image/compress/file-urls",

        params: {
            output: req.outputName + ".png",
            quality: req.quality,
        },
        headers: {
            "apy-token": process.env.compressToken,
        },
        data: req,
    };

    await axios(config)
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

exports.execute = compress;
