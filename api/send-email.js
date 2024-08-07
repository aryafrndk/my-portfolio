const express = require('express');
const bodyParser = require('body-parser');
const Resend = require('resend');
require('dotenv').config(); // Untuk memuat variabel lingkungan

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  resend.send({
    from: 'you@example.com',
    to: 'recipient@example.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  })
    .then(() => res.status(200).send('Email sent successfully'))
    .catch((error) => res.status(500).send(`Error sending email: ${error.message}`));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
