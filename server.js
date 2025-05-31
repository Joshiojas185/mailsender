// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();

// app.use(express.json());
// app.use(cors());

// const transporter = nodemailer.createTransport(
//     {
//         secure: true,
//         host : 'smtp.gmail.com',
//         port : 465,
//         auth : {
//             user : 'joshiojas185@gmail.com',
//             pass:'fajchkgnhbjxvmoy'
//         }
//     }
// )

// function sendMail(to, sub, msg){
//     transporter.sendMail({
//         to: to, 
//         suject : sub,
//         html : msg
//     });
// }

// app.post('/sendmail', (req, res) => {
//   const {
//     to,
//     sub, 
//     msg
//   } = req.body;

//   sendMail(to,sub,msg);

// });



// const server = http.createServer(app);
// const PORT = 4000;

// server.listen(PORT, () =>{
//     console.log(`Server running on http://localhost:${PORT}`);
// })




const express = require('express');
const http = require('http');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'joshiojas185@gmail.com',
        pass: 'fajchkgnhbjxvmoy'
    }
});

function sendMail(to, sub, msg) {
    return transporter.sendMail({
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

    try {
        await sendMail(to, sub, msg);
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
