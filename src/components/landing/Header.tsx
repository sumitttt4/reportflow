import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart3, Sun, Moon } from 'lucide-react'; // Import Sun and Moon icons
import Button from '../ui/Button';
import { useTheme } from '../../contexts/ThemeContext'; // Import useTheme

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use theme context

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-black shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 dark:bg-black rounded-lg p-2 shadow">
              <BarChart3 className="h-6 w-6 text-white dark:text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">ReportFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('features')}
              className="px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Pricing
            </button>
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link to="/signup">
              <Button className="font-semibold">Start Free Trial</Button>
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors ml-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors mr-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-black bg-white dark:bg-black">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Pricing
            </button>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Sign In
            </Link>
            <div className="px-3">
              <Link to="/signup" className="block">
                <Button className="w-full font-semibold">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
