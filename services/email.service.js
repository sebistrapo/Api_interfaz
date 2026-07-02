const nodemailer = require("nodemailer");
require('dotenv').config()
// Esta función se encarga de enviar un correo electrónico por medio de nodemailer
// recibe como parámetros el correo electrónico del usuario, el asunto y el texto del correo.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.MAIL}`,
    pass: `${process.env.GPASS}`,
  },
});

exports.sendEmail = async (subject, text) => {
  const mailOptions = {
    from: `${process.env.MAIL}`,
    to: `${process.env.MAIL}`,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Correo enviado "+ info.response);
    }
  });
};