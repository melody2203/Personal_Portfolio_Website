const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: '*', // For testing, allow all. You can restrict this to your Vercel URL later.
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Log incoming requests for debugging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${req.headers.origin}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Portfolio Backend is running...');
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log(`New Message from ${name} (${email}): ${message}`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({
            success: true,
            message: 'Message received! Thank you for reaching out.'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again later.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
