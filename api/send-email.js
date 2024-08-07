const express = require('express');
const bodyParser = require('body-parser');
const Resend = require('resend');
require('dotenv').config(); // Memuat variabel lingkungan dari file .env

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware untuk menangani JSON
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  resend.send({
    from: 'aryafrandika0408@gmail.com',   // Pastikan ini adalah alamat yang valid dan terdaftar di Resend
    to: 'aryafrandika0408@gmail.com', // Pastikan ini adalah alamat yang valid dan dapat menerima email
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  })
    .then(() => res.status(200).send('Email sent successfully'))
    .catch((error) => {
      console.error('Error details:', error); // Log kesalahan di server
      res.status(500).send(`Error sending email: ${error.message}`);
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
