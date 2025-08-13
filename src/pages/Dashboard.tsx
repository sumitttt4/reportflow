import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHome from '../components/dashboard/DashboardHome';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 lg:ml-72 overflow-auto">
        <div className="p-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/data-sources" element={<div className="text-gray-900 dark:text-white">Data Sources - Coming Soon</div>} />
            <Route path="/templates" element={<div className="text-gray-900 dark:text-white">Templates - Coming Soon</div>} />
            <Route path="/scheduling" element={<div className="text-gray-900 dark:text-white">Scheduling - Coming Soon</div>} />
            <Route path="/reports" element={<div className="text-gray-900 dark:text-white">Report History - Coming Soon</div>} />
            <Route path="/settings" element={<div className="text-gray-900 dark:text-white">Settings - Coming Soon</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
