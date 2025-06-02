// require('dotenv').config();
// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const nodemailer = require('nodemailer');


// const app = express();

// app.use(express.json());
// app.use(cors());

// const transporter = nodemailer.createTransport({
//     host: 'mail.codeup.in', // use the SMTP server from cPanel
//     port: 465,               // SSL port
//     secure: true,            // true for port 465
//     auth: {
//         user: 'ojas@codeup.in',
//         pass: 'Ojas#12345678' // the password you just set/reset
//     }
// });



// function sendMail(to, sub, msg) {
//     return transporter.sendMail({
//         from: 'ojas@codeup.in', // Always specify this explicitly
//         to: to,
//         subject: sub,
//         html: msg
//     });
// }



// app.get('/',(req,res) =>{

//     res.send('Hello, My Friend');
// })

// app.post('/sendmail', async (req, res) => {
//     const { to, sub, msg } = req.body;
//     try {
//         await sendMail(to, sub, msg);
//         console.log(`Email sent successfully to ${to}`);
//         res.status(200).send('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Error sending email');
//     }
// });

// const server = http.createServer(app);
// const PORT = 4000;

// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
