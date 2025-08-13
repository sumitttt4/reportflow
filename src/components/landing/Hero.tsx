import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-700">
                <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">AI-Powered Automation</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Save 10+ Hours Weekly on
                <span className="text-blue-600 dark:text-blue-400 block">Business Reports</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Connect your data sources once. Get automated, AI-enhanced reports delivered to your inbox or Slack. 
                Focus on decisions, not data gathering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Setup in 5 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">95% time reduction</span>
              </div>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-xl shadow-2xl p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Monthly Sales Report</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full dark:bg-green-900/20 dark:text-green-400">Automated</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-blue-200 rounded-full w-full dark:bg-blue-900/30">
                    <div className="h-2 bg-blue-600 rounded-full w-3/4 dark:bg-blue-400"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full w-full dark:bg-gray-700">
                    <div className="h-2 bg-gray-400 rounded-full w-1/2 dark:bg-gray-500"></div>
                  </div>
                  <div className="h-2 bg-green-200 rounded-full w-full dark:bg-green-900/30">
                    <div className="h-2 bg-green-600 rounded-full w-5/6 dark:bg-green-400"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Generated 2 minutes ago</span>
                  <span className="text-xs text-blue-600 font-medium dark:text-blue-400">AI insights available</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg dark:bg-blue-500">
              +127% efficiency
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg dark:bg-green-500">
              Auto-delivered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
