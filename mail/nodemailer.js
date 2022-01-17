require('dotenv').config()
const nodemailer = require('nodemailer')

async function nodeMailer (receiver) {
    let transporter = nodemailer.createTransport({
        port: 587,
        service: 'gmail',
        auth: {
          user: process.env.E_USERNAME, // generated ethereal user
          pass: process.env.E_PASSWORD, // generated ethereal password
        }
    })

    let info = await transporter.sendMail({
        from: process.env.E_USERNAME, // sender address
        to: receiver, // list of receivers
        subject: "Online shopping", // Subject line
        text: "Hello, how can I help you?", // plain text body
        html: "<b>Hello, how can I help you?</b>", // html body
    })
    console.log("Message sent: %s", info.messageId);
}

module.exports = nodeMailer