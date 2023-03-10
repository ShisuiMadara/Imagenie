var axios = require("axios");
require("dotenv").config();

async function extract(req, res) {
    req = req.body.request;

    var config = {
        method: "post",
        url: "https://api.apyhub.com/processor/image/metadata/file-urls",
        headers: {
            "apy-token": process.env.metaToken,
        },
        data: req,
    };

    await axios(config)
        .then(async function (response) {
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

exports.execute = extract;
