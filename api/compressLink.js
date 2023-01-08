var axios = require('axios');
require('dotenv').config()

//reads link output file

async function compress(req,res) {
    
    req = req.body.request

    console.log(req)

    var config = {
        method: 'post',
        url: 'https://api.apyhub.com/processor/image/compress/url/file',
        
        params: {
            output: req.outputName+'.png',
            quality: req.quality,
        },
        headers: { 
            'apy-token': process.env.compressToken, 
        },
        data : req
    };

    await axios(config)
    .then(async function (response) {
        console.log(JSON.stringify(response.data));
        await res.send({
            sucess:true,
            data: response.data,
            type: '.png'
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

exports.execute = compress

