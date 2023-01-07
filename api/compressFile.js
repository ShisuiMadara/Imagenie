require('dotenv').config()
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function compress (req,res) {

    console.log(req)
    const form = new FormData();
    form.append('image', fs.readFileSync('/home/shisuimadara/Downloads/WhatsApp Image 2023-01-06 at 19.12.11.jpeg'), 'stock-photo.jpg');

    await axios.post(
        'https://api.apyhub.com/processor/image/compress/file',
        form,
        {
            params: {
                'output': 'test-sample.png',
                'quality': '90'
            },
            headers: {
                ...form.getHeaders(),
                'apy-token': process.env.compressToken,
                'content-type': 'multipart/form-data',
            }
        }
    ).then(async function (response) {
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

exports.execute = compress