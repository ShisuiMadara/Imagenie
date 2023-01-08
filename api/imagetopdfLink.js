var axios = require('axios');
require('dotenv').config()

//reads link output file

async function crop(req,res) {
    
    req = req.body.request

    console.log(req)

    var config = {
        method: 'post',
        url: 'https://api.apyhub.com/convert/image-url/pdf-file?output=' + req.outputName + '.pdf',
        headers: { 
            'apy-token': process.env.convertorToken, 
          
        },
        data : req
    };

    await axios(config)
    .then(async function (response) {
        console.log(JSON.stringify(response.data));
        await res.send({
            sucess:true,
            data: response.data,
            type: '.pdf'
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

