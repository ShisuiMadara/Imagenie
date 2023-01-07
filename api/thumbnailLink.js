var axios = require('axios');
require('dotenv').config()

//reads link output file

async function thumbnail(req,res) {
    
    req = req.body.request

    console.log(req)

    var config = {
        method: 'post',
        url: 'https://api.apyhub.com/generate/image/thumbnail/url/file',
        params: {
            'output': req.outputName,
            'width': req.width,
            'height': req.height
        },
        headers: { 
            'apy-token': process.env.thumbnailToken, 
            'Content-Type': 'application/json'
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

exports.execute = thumbnail

