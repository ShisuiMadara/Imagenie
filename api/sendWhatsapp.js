require('dotenv').config()

const account_sid = process.env.twilioAcc
const account_token = process.env.twilioToken

console.log(account_sid)
console.log(process.env.cropToken)

const client = require('twilio')(account_sid, account_token);

async function sms (req,res) {
    client.messages
      .create({
         body: 'Your image optimization has been completed.',
         from: 'whatsapp:+14155238886',
         to: 'whatsapp:'+req.body.phone
       })
       .then(res.send({
        success:true,
        data: "Message sent successfully"
    })).catch(function(error){
        res.send({
            success: false,
            data: error
        })
    })
}

exports.execute = sms