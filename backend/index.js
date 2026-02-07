const express = require('express');
const cors = require('cors');
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


app.get('/', (req, res) => {
    res.send('Portfolio Backend is running...');
});

const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log(`New Message from ${name} (${email}): ${message}`);

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'merertuphilip@gmail.com',
            reply_to: email,
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error('RESEND ERROR:', error);
            return res.status(500).json({
                success: false,
                message: `Server Error: ${error.message}. Please check RESEND_API_KEY.`
            });
        }

        console.log('Email sent successfully via Resend');
        res.status(200).json({
            success: true,
            message: 'Message received! Thank you for reaching out.'
        });
    } catch (err) {
        console.error('SERVER FATAL ERROR:', err);
        res.status(500).json({
            success: false,
            message: `Fatal error: ${err.message}. Please verify Render environment variables.`
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
