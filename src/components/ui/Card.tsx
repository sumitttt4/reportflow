import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export default function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg transition-colors duration-300 ${padding ? 'p-6' : ''} ${className}`}>
      {children}
    </div>
  );
}
