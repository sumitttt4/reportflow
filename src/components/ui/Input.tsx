import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export default function Input({
  label,
  error,
  helper,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        className={`
          block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-transparent transition-all duration-200
          dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400
          ${error ? 'border-red-300 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-400' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {helper && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helper}</p>
      )}
    </div>
  );
}
