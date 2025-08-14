import React from 'react';
import { Link2, Settings, Zap, Mail } from 'lucide-react';

const steps = [
  {
    icon: Link2,
    title: 'Connect',
    description: 'Link your data sources in seconds with OAuth or API keys. We support 50+ integrations.',
    color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Use our drag-and-drop builder to create custom reports. AI suggests optimal layouts.',
    color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400' // Assuming purple is defined or will be added
  },
  {
    icon: Zap,
    title: 'Automate',
    description: 'Set your schedule and let AI handle data mapping, analysis, and anomaly detection.',
    color: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' // Assuming green is defined or will be added
  },
  {
    icon: Mail,
    title: 'Receive',
    description: 'Get polished reports with executive summaries delivered to email or Slack.',
    color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400' // Assuming orange is defined or will be added
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            From Setup to Success in Minutes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined workflow gets you from manual reporting to full automation faster than 
            you can make your morning coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 z-0">
                  <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full transform translate-x-1 -translate-y-0.5"></div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-lg">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <span className="text-sm font-semibold text-gray-400">{`0${index + 1}`}</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Time indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 dark:bg-blue-900/20 dark:border-blue-700">
            <span className="text-blue-600 font-medium text-sm dark:text-blue-400">⏱️ Average setup time: 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
