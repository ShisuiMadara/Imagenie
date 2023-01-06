var axios = require('axios');
require('dotenv').config()

//reads link output file

async function crop(req,res) {
    
    req = req.body

    console.log(req)

    var config = {
        method: 'post',
        url: 'https://api.apyhub.com/processor/image/resize/url/file?output=test-sample.png&width=' + req.width + '&height=' + req.height,
        headers: { 
            'apy-token': process.env.resizeToken, 
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

exports.execute = crop

