import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res)=>{
    const { name, email, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'juandagv95@gmail.com',
            pass: 'khglrlvtzycudhat'
        }
    });

    const mailOptions = {
        from: email,
        to: 'juandagv95@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`)
})