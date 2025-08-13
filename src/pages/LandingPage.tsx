import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Process from '../components/landing/Process';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}