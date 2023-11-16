const nodemailer = require('nodemailer')
const asyncHandler = require("express-async-handler")

const sendMail = asyncHandler(async (data, req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MP
        }
    });
      
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Hey 👻" <abc@gmail.com>', 
        to: data.to, 
        subject: data.subject, 
        text: data.text, 
        html: data.html, 
    });
      
    console.log("Message sent: %s", info.messageId);
    
})

module.exports = sendMail