require('dotenv').config()
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');


async function watermark (req,res) {

    req = req.body.request
    var objPath = req.objPath
    var waterPath = req.waterPath

    const form = new FormData();
    form.append('image', fs.readFileSync(objPath), '"stock-photo.jpg"')
    form.append('watermark', fs.readFileSync(waterPath), '"watermark-photo.jpg"')

    await axios.post(
        'https://api.apyhub.com/processor/image/watermark/file/url',
        form,
        {
            params: {
                'output': req.outputName + '.png'
            },
            headers: {
                ...form.getHeaders(),
                'apy-token': process.env.watermarkToken
            }
        }
    ).then(async function (response) {
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

exports.execute = watermark