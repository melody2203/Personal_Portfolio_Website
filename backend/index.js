const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Portfolio Backend is running...');
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // In a real app, you would send an email or save to a database here.
    // For this demonstration, we'll log it and return success.
    console.log(`New Message from ${name} (${email}): ${message}`);

    res.status(200).json({
        success: true,
        message: 'Message received! Thank you for reaching out.'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
