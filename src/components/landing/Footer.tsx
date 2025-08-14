import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'API Documentation', 'Security'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Contact Us'],
};

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Mail, href: 'mailto:reportflow@reportflow.netlify.app' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-600 rounded-lg p-2">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">ReportFlow</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Automate business reports with AI-powered insights.
          </p>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-300">
        <p>© 2025 ReportFlow. All rights reserved.</p>
        <Link
          to="/signup"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-2 sm:mt-0 font-medium"
        >
          Start your free trial →
        </Link>
      </div>
    </footer>
  );
}
      