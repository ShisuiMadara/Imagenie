require('dotenv').config()
const axios = require('axios');
const FormData = require('form-data');
const formidable = require('formidable');
const fs = require('fs');

async function compress (req,res) {

    var objPath = req.objPath;

    const form = new FormData();
    form.append('image', fs.readFileSync(objPath), 'stock-photo.jpg');

    await axios.post(
        'https://api.apyhub.com/processor/image/compress/file',
        form,
        {
            params: {
                'output': req.outputName,
                'quality': req.quality
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

//TEST

// const http = require('http');
// const formidable = require('formidable');
// const fs = require('fs');
  
// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
  
//             var tempFilePath = files.filetoupload.filepath;
//             var projectFilePath = __dirname + '/uploaded_file/' +
//                 files.filetoupload.originalFilename;
//             fs.rename(tempFilePath, projectFilePath, function (err) {
//                 if (err) throw err;
//                 console.log(projectFilePath)
//                 res.write('File has been successfully uploaded');
//                 res.end();
//             });
//         });

        
//     }
//     else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(
// '<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8080);