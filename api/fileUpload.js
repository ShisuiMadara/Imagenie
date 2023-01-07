const formidable = require("formidable");
const fs = require("fs");
const formHandler = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var tempFilePath = files.file.filepath;
        var projectFilePath = __dirname + "/uploaded_file/" + files.file.originalFilename;
        var rawData = fs.readFileSync(tempFilePath);
        fs.writeFile(projectFilePath, rawData, function (err) {
            if (err) {
                res.status(200).send({
                    success: false,
                });
            } else {
                res.status(200).send({
                    success: true,
                    remotePath: projectFilePath,
                });
            }
        });
    });
};
exports.execute = formHandler;
