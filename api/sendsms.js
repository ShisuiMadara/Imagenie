require("dotenv").config();

const account_sid = process.env.twilioAcc;
const account_token = process.env.twilioToken;

console.log(account_sid);
console.log(process.env.cropToken);

const client = require("twilio")(account_sid, account_token);

async function sms(req, res) {
    client.messages
        .create({
            to: req.body.phone,
            from: "+1 205 839 4449",
            body: "The image optimization is completed.",
        })
        .then(
            res.send({
                success: true,
                data: "Message sent successfully",
            }),
        )
        .catch(function (error) {
            res.send({
                success: false,
                data: error,
            });
        });
}

exports.execute = sms;
