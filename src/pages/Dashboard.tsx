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
            <Route path="/data-sources" element={
              <div className="text-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-2">Data Sources</h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">Connect your favorite databases and cloud sources to automate reporting. Popular integrations like MySQL, Google Sheets, and more coming soon!</p>
                <div className="flex gap-4 mb-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow w-40 flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/MySQL_logo.png" alt="MySQL" className="h-8 mb-2" />
                    <span className="text-sm">MySQL</span>
                    <span className="text-xs text-blue-500 mt-1">Coming Soon</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow w-40 flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Sheets_logo_%282014-2020%29.png" alt="Google Sheets" className="h-8 mb-2" />
                    <span className="text-sm">Google Sheets</span>
                    <span className="text-xs text-blue-500 mt-1">Coming Soon</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow w-40 flex flex-col items-center">
                    <span className="text-2xl">+</span>
                    <span className="text-sm">Request Integration</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">Add Data Source</button>
              </div>
            } />
            <Route path="/templates" element={
              <div className="text-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-2">Templates</h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">Save time with ready-made report templates for sales, marketing, finance, and more. Custom templates will be available soon!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col">
                    <span className="font-semibold">Sales Report</span>
                    <span className="text-xs text-blue-500 mt-1">Popular</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col">
                    <span className="font-semibold">Marketing Dashboard</span>
                    <span className="text-xs text-blue-500 mt-1">Coming Soon</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col">
                    <span className="font-semibold">Finance Overview</span>
                    <span className="text-xs text-blue-500 mt-1">Coming Soon</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">Create New Template</button>
              </div>
            } />
            <Route path="/scheduling" element={
              <div className="text-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-2">Scheduling</h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">Automate report delivery to your inbox or Slack. Flexible scheduling options are on the way!</p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="py-2">Report</th>
                        <th className="py-2">Next Run</th>
                        <th className="py-2">Delivery</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sales Report</td>
                        <td>Tomorrow 9:00 AM</td>
                        <td>Email</td>
                        <td><span className="text-green-600">Active</span></td>
                      </tr>
                      <tr>
                        <td>Marketing Dashboard</td>
                        <td>Monday 8:00 AM</td>
                        <td>Slack</td>
                        <td><span className="text-yellow-600">Paused</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">Schedule New Report</button>
              </div>
            } />
            <Route path="/reports" element={
              <div className="text-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-2">Report History</h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">Track, download, and share your past reports. Full history and audit trail features coming soon!</p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="py-2">Report</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sales Report</td>
                        <td>Aug 13, 2025</td>
                        <td><span className="text-green-600">Completed</span></td>
                        <td>
                          <button className="text-blue-600 mr-2">Download</button>
                          <button className="text-gray-600">Share</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Marketing Dashboard</td>
                        <td>Aug 12, 2025</td>
                        <td><span className="text-red-600">Failed</span></td>
                        <td>
                          <button className="text-blue-600 mr-2">Download</button>
                          <button className="text-gray-600">Share</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            } />
            <Route path="/settings" element={
              <div className="text-gray-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-2">Settings</h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">Personalize your experience, manage team access, and configure notifications. More options coming soon!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                    <h3 className="font-semibold mb-2">Profile</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Edit your name, email, and avatar.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                    <h3 className="font-semibold mb-2">Team</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Invite team members and manage roles.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Set your notification preferences.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                    <h3 className="font-semibold mb-2">Integrations</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connect to Slack, email, and more.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                    <h3 className="font-semibold mb-2">Billing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage your subscription and payment methods.</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">Save Changes</button>
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
}
