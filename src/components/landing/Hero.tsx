import { Link } from 'react-router-dom';
import { Play, ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-28 overflow-hidden">
      
      {/* Background gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-400/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-400/30 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/40 dark:bg-white/10 rounded-full"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-700 shadow-sm">
                <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Simple. Fast. Reliable.
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Stop Wrestling with
                <span className="text-blue-600 dark:text-blue-400 block">
                  Business Reports
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Tired of spending hours on repetitive reports? Connect your data once, and let us handle the rest.
                Get clear, actionable insights delivered right to your team.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
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
          </motion.div>

          {/* Right Product Mockup with gradient border + shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
              <div className="relative backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700 shadow-inner">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Monthly Sales Report
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full dark:bg-green-900/20 dark:text-green-400">
                      Automated
                    </span>
                  </div>

                  {/* Shimmer Bars */}
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden dark:bg-blue-900/30">
                      <div className="h-2 bg-blue-600 w-3/4 animate-shimmer dark:bg-blue-400"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <div className="h-2 bg-gray-400 w-1/2 animate-shimmer dark:bg-gray-500"></div>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full overflow-hidden dark:bg-green-900/30">
                      <div className="h-2 bg-green-600 w-5/6 animate-shimmer dark:bg-green-400"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Generated 2 minutes ago
                    </span>
                    <span className="text-xs text-blue-600 font-medium dark:text-blue-400">
                      AI insights available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Tags */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0px rgba(59,130,246,0.4)', '0 0 20px rgba(59,130,246,0.6)', '0 0 0px rgba(59,130,246,0.4)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
            >
              +127% efficiency
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0px rgba(34,197,94,0.4)', '0 0 20px rgba(34,197,94,0.6)', '0 0 0px rgba(34,197,94,0.4)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-4 -left-4 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
            >
              Auto-delivered
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: 200px 0; }
          }
          .animate-shimmer {
            background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
            background-size: 200px 100%;
            animation: shimmer 1.5s infinite;
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(-10px); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
