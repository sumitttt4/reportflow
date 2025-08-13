import React from 'react';
import { Plus, TrendingUp, Clock, AlertCircle, Database, FileText, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const stats = [
  {
    name: 'Active Reports',
    value: '12',
    change: '+3 this month',
    changeType: 'increase',
    icon: FileText
  },
  {
    name: 'Data Sources',
    value: '5',
    change: '+2 this week',
    changeType: 'increase',
    icon: Database
  },
  {
    name: 'Time Saved',
    value: '43hrs',
    change: 'this month',
    changeType: 'neutral',
    icon: Clock
  },
  {
    name: 'Success Rate',
    value: '99.2%',
    change: '+0.8% from last month',
    changeType: 'increase',
    icon: TrendingUp
  }
];

const recentReports = [
  {
    name: 'Monthly Sales Summary',
    status: 'completed',
    lastRun: '2 hours ago',
    nextRun: 'Tomorrow at 9:00 AM'
  },
  {
    name: 'Weekly Performance Dashboard',
    status: 'running',
    lastRun: 'Running now',
    nextRun: 'Every Monday at 8:00 AM'
  },
  {
    name: 'Customer Analytics Report',
    status: 'completed',
    lastRun: '1 day ago',
    nextRun: 'Every 1st of the month'
  },
  {
    name: 'Financial Overview',
    status: 'error',
    lastRun: 'Failed 3 hours ago',
    nextRun: 'Next retry in 1 hour'
  }
];

const quickActions = [
  {
    title: 'Connect Google Sheets',
    description: 'Link your spreadsheets for automated reporting',
    icon: Database,
    action: 'Connect'
  },
  {
    title: 'Create Report Template',
    description: 'Design a custom report layout',
    icon: FileText,
    action: 'Create'
  },
  {
    title: 'Schedule New Report',
    description: 'Set up automated report delivery',
    icon: Calendar,
    action: 'Schedule'
  }
];

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Monitor your reports and data connections</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.changeType === 'increase' ? 'text-green-600 dark:text-green-400' :
                  stat.changeType === 'decrease' ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg dark:bg-blue-900/20">
                <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Reports */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Reports</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      report.status === 'completed' ? 'bg-green-500' :
                      report.status === 'running' ? 'bg-blue-500' :
                      report.status === 'error' ? 'bg-red-500' : 'bg-gray-400'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{report.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Last run: {report.lastRun}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Next: {report.nextRun}</p>
                    {report.status === 'error' && (
                      <div className="flex items-center text-red-600 dark:text-red-400 text-sm mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Needs attention
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-50 p-2 rounded-lg dark:bg-blue-900/20">
                      <action.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">{action.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{action.description}</p>
                      <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                        {action.action} →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
