// require('dotenv').config(); // Load environment variables from .env file

// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();

// app.use(express.json());
// app.use(cors());

// // Replace with your email provider's SMTP settings
// const transporter = nodemailer.createTransport({
//     host: 'smtp.reactrajasthan.com', // Your SMTP host
//     port: 587, // Commonly used port for SMTP
//     secure: false, // Use true for port 465, false for other ports
//     auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASS  // Your email password or App Password
//     }
// });

// function sendMail(to, sub, msg) {
//     return transporter.sendMail({
//         from: process.env.EMAIL_USER, // Sender address
//         to: to,
//         subject: sub, 
//         html: msg
//     });
// }

// app.get('/', (req, res) => {
//     res.send('Hello, My Friend');
// });

// app.post('/sendmail', async (req, res) => {
//     const { to, sub, msg } = req.body;

//     try {
//         await sendMail(to, sub, msg);
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



require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();

app.use(express.json());
app.use(cors());

// const transporter = nodemailer.createTransport({
//     secure: true,
//     host: 'smtp.gmail.com',
//     port: 465,
//     auth: {
//         user: 'joshiojas185@gmail.com',
//         pass: 'fajchkgnhbjxvmoy'
//     }
// });

const transporter = nodemailer.createTransport({
    host: 'mail.codeup.in', // use the SMTP server from cPanel
    port: 465,               // SSL port
    secure: true,            // true for port 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD// the password you just set/reset
    }
});


// function sendMail(to, sub, msg) {
//     return transporter.sendMail({
//         to: to,
//         subject: sub, 
//         html: msg
//     });
// }

function sendMail(to, sub, msg) {
    return transporter.sendMail({
        from: 'ojas@codeup.in', // Always specify this explicitly
        to: to,
        subject: sub,
        html: msg
    });
}



app.get('/',(req,res) =>{

    res.send('Hello, My Friend');
})

app.post('/sendmail', async (req, res) => {
    const { to, sub, msg } = req.body;

    // const to = "joshiojas185@gmail.com";
    // const sub = "This is a test email";
    // const msg = "Test Message for the mail";

    try {
        await sendMail(to, sub, msg);
        console.log(`Email sent successfully to ${to}`);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

const server = http.createServer(app);
const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
