var axios = require("axios");
require("dotenv").config();

//reads link output file

//output-url needs to be provided

async function watermark(req, res) {
    req = req.body.request;

    console.log(req);

    var config = {
        method: "post",
        url: "https://api.apyhub.com/processor/image/watermark/file-urls",
        params: {
            output: req.outputName + ".png",
        },

        headers: {
            "apy-token": process.env.watermarkToken,
        },
        data: req,
    };

    await axios(config)
        .then(async function (response) {
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

exports.execute = watermark;
