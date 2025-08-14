// Stripe setup
const Stripe = require('stripe');
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_yourkey';
const stripe = Stripe(STRIPE_SECRET_KEY);

// Example payment endpoint
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || 'usd',
      automatic_payment_methods: { enabled: true },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_LFk2X22D_82nuJB8TLtDtYguwGdoAMb8w';

app.post('/api/resend-email', async (req, res) => {
  const { name, email } = req.body;
  if (!email || !name) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'waitlist@yourdomain.com', // Use a verified sender
        to: email,
        subject: 'Waitlist Confirmation',
        html: `<p>Hi ${name},</p><p>Thank you for joining our waitlist! We'll notify you soon.</p>`
      }),
    });
    if (response.ok) {
      res.json({ success: true });
    } else {
      const error = await response.text();
      res.status(500).json({ error });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
