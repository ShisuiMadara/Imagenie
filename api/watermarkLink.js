var axios = require('axios');
require('dotenv').config()

//reads link output file

//output-url needs to be provided

async function watermark(req,res) {
    
    req = req.body.request

    console.log(req)

    var config = {
        method: 'post',
        url: 'https://api.apyhub.com/processor/image/watermark/url/file?output=' + req.outputName,
        headers: { 
            'apy-token': process.env.watermarkToken, 
        },
        data : req
    };

    await axios(config)
    .then(async function (response) {
        console.log(JSON.stringify(response.data));
        await res.send({
            sucess:true,
            data: response.data
        })
    })
    .catch(function (error) {
        console.log(error);

        res.send({
            success: false,
            data: error
        })
    });

}

exports.execute = watermark

