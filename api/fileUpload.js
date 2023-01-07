const formidable = require("formidable");
const fs = require("fs");
const formHandler = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var tempFilePath = files.file.filepath;
        var projectFilePath = __dirname + "/uploaded_file/" + files.file.originalFilename;
        var rawData = fs.readFileSync(tempFilePath);
        fs.writeFile(projectFilePath, rawData, function (err) {
            if (err) throw err;
            console.log(projectFilePath);
        })
            .then(() => {
                res.status(200).send({
                    success: true,
                });
            })
            .error(() => {
                res.status(200).send({
                    success: false,
                });
            });
    });
};
exports.execute = formHandler;
