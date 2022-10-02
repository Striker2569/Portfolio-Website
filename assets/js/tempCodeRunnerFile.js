const nodemailer = require("nodemailer");
// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "12e5f5f6010134",
//       pass: "3b43fc737fb288"
//     }
//   });
//   var name = document.getElementById("name").value;
//   var mail = document.getElementById("mail").value;
//   var body = document.getElementById("body").value;
//   const mailOptions = {
//     from: mail, // Sender address
//     to: '6harsh.isha@gmail.com', // List of recipients
//     subject: name, // Subject line
//     text: body, // Plain text body
// };
//   transport.sendMail(mailOptions, function(err, info) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(info);
//     }
// });