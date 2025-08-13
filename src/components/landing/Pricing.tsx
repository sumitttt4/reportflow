import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out automated reporting',
    features: [
      { name: '2 data sources', included: true },
      { name: '5 reports per month', included: true },
      { name: 'Basic templates', included: true },
      { name: 'Email delivery', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced AI insights', included: false },
      { name: 'Custom branding', included: false },
      { name: 'Priority support', included: false },
      { name: 'API access', included: false }
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per month',
    description: 'For growing businesses that need comprehensive reporting',
    features: [
      { name: 'Unlimited data sources', included: true },
      { name: 'Unlimited reports', included: true },
      { name: 'Advanced templates', included: true },
      { name: 'Email & Slack delivery', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced AI insights', included: true },
      { name: 'Custom branding', included: true },
      { name: 'API access', included: true },
      { name: 'White-label options', included: false }
    ],
    cta: 'Start 14-Day Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'For large organizations with advanced needs',
    features: [
      { name: 'Everything in Professional', included: true },
      { name: 'White-label options', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'SLA guarantees', included: true },
      { name: 'On-premise deployment', included: true },
      { name: 'Advanced security', included: true },
      { name: 'Training & onboarding', included: true },
      { name: 'Custom development', included: true }
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as your reporting needs grow. All plans include our core automation features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-lg dark:ring-blue-400' : 'shadow-sm'} hover:shadow-md transition-shadow duration-200`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg dark:bg-blue-500">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 dark:text-gray-300 ml-1">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/signup" className="block">
                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
