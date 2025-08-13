import React from 'react';
import { Bot, Database, Calendar, Bell, TrendingUp, Shield, Zap, Download } from 'lucide-react';
import Card from '../ui/Card';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Insights',
    description: 'Automatically detect anomalies, trends, and generate executive summaries with advanced AI analysis.'
  },
  {
    icon: Database,
    title: 'Universal Connections',
    description: 'Connect Google Sheets, CSV files, MySQL, Stripe, QuickBooks, and 50+ other data sources instantly.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Set up daily, weekly, or monthly reports that automatically generate and deliver on time.'
  },
  {
    icon: Bell,
    title: 'Multi-Channel Delivery',
    description: 'Get reports via email, Slack, Teams, or download directly from your dashboard.'
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Visualize trends, compare periods, and get predictive insights to drive business decisions.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and role-based access controls protect your data.'
  },
  {
    icon: Zap,
    title: 'Auto-Mapping',
    description: 'AI automatically maps your data fields and suggests optimal report structures.'
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Export reports as PDF, CSV, Excel, or interactive web dashboards with one click.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need to Automate Reports
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform handles the entire reporting workflow, from data collection to AI-enhanced delivery, 
            so you can focus on what the data tells you instead of gathering it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4 dark:bg-blue-900/20">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
