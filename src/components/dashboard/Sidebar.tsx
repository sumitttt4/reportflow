import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3, Home, Database, FileText, Calendar, History,
  Settings, Menu, X, Plus, Bell, HelpCircle, LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Data Sources', href: '/dashboard/data-sources', icon: Database },
  { name: 'Templates', href: '/dashboard/templates', icon: FileText },
  { name: 'Scheduling', href: '/dashboard/scheduling', icon: Calendar },
  { name: 'Report History', href: '/dashboard/reports', icon: History },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <>
      {/* Mobile backdrop */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden dark:bg-black dark:bg-opacity-70"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 ease-in-out
        ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">ReportFlow</span>
            </div>
            <button
              className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              onClick={() => setIsCollapsed(true)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* User info */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/20">
                <span className="text-blue-600 font-medium text-sm dark:text-blue-400">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                  {user?.company || user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <button className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
              <Bell className="h-5 w-5 mr-3" />
              Notifications
            </button>
            <button className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
              <HelpCircle className="h-5 w-5 mr-3" />
              Help & Support
            </button>
            <button 
              onClick={logout}
              className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200 lg:hidden dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg text-gray-600 dark:text-gray-300"
        onClick={() => setIsCollapsed(false)}
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  );
}
