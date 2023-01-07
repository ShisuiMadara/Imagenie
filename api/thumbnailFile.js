require('dotenv').config()
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function thumbnail (req,res) {

    var objPath = req.objPath;

    const form = new FormData();
    form.append('image', fs.readFileSync(objPath), 'stock-photo.jpg');

    await axios.post(
        'https://api.apyhub.com/generate/image/thumbnail/file',
        form,
        {
            params: {
                'output': req.outputName,
                'width': req.width,
                'height': req.height
            },
            headers: {
                ...form.getHeaders(),
                'apy-token': process.env.thumbnailToken,
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

exports.execute = thumbnail