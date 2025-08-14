import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Button from './ui/Button';
import Input from './ui/Input';
import { Mail, User } from 'lucide-react';

export default function WaitlistForm() {
  const stripePromise = loadStripe('pk_test_51Rvkh0PlhqQiwCGFbxsThfEj5FyXfRqLJtIhyjVnon7BKn2gE7FMGfTTfG7vf5ivV4Z5aq98S1x1Ur1o1Nh7evZr00YPxHOCBC'); // Replace with your Stripe publishable key
  // Stripe payment handler
  const handleStripePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        alert('Stripe not loaded');
        return;
      }
      // Redirect to Stripe Checkout
      const response = await fetch('http://localhost:3001/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 5000, currency: 'usd' }),
      });
      const data = await response.json();
      // You need a Price ID for Stripe Checkout
      const result = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_1Rvkh0PlhqQiwCGFbxsThfEj5FyXfRqLJtIhyjVnon7BKn2gE7FMGfTTfG7vf5ivV4Z5aq98S1x1Ur1o1Nh7evZr00YPxHOCBC', quantity: 1 }], // Updated to your actual Price ID
        mode: 'payment',
        successUrl: window.location.origin + '/success',
        cancelUrl: window.location.origin + '/cancel',
      });
      if (result.error) {
        alert(result.error.message);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      alert('Payment error: ' + errorMsg);
    }
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const handleResendEmail = async () => {
    setResendLoading(true);
    setResendMessage('');
    try {
      const response = await fetch('http://localhost:5000/api/resend-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        setResendMessage('Confirmation email resent successfully!');
      } else {
        const error = await response.text();
        setResendMessage('Failed to resend email. ' + error);
      }
    } catch (error) {
      setResendMessage('Failed to resend email. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // Simulate API call for waitlist submission
      // In a real application, you would send this data to your backend
      // e.g., fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ name, email }) });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate success
      setSuccessMessage('Thanks for joining the waitlist! We\'ll notify you soon.');
      setName('');
      setEmail('');
    } catch (error) {
      // Simulate error
      setErrors({ email: 'Failed to join waitlist. Please try again.' });
      console.error('Waitlist submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setErrors({});
    setSuccessMessage('');
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Join Our Waitlist
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Be the first to know when we launch and get exclusive early access!
        </p>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {successMessage ? (
            <>
              <div className="text-green-600 dark:text-green-400 text-lg font-medium mb-4">
                {successMessage}
              </div>
              <Button
                type="button"
                size="lg"
                loading={resendLoading}
                onClick={handleResendEmail}
                className="w-full sm:w-auto mb-4"
              >
                Resend Email
              </Button>
              {resendMessage && (
                <div className="text-blue-600 dark:text-blue-400 text-base font-medium mb-2">
                  {resendMessage}
                </div>
              )}
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  label="Full Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  error={errors.name}
                  className="pl-10"
                  autoComplete="name"
                />
                <User className="absolute left-3 top-8 h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="relative">
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@example.com"
                  error={errors.email}
                  className="pl-10"
                  autoComplete="email"
                />
                <Mail className="absolute left-3 top-8 h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="submit"
                  size="lg"
                  loading={loading}
                  className="w-full sm:w-auto"
                >
                  Join Waitlist
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={handleReset}
                  className="w-full sm:w-auto"
                  disabled={loading}
                >
                  Clear Form
                </Button>
               
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

