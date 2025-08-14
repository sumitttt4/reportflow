import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield } from 'lucide-react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of business owners who've automated their reporting and 
            gained valuable insights. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-blue-600 dark:text-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-black hover:bg-blue/10 dark:hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-black-100 dark:text-blue-300">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
