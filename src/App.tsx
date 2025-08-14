import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <GoogleOAuthProvider clientId="483755923942-t2d881cv0apelplqu0r5e56fo6t0n7er.apps.googleusercontent.com">
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen w-full relative">
              {/* Radial Gradient Background from Bottom */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #f9902dff 100%)",
                }}
              />
              {/* Your Content/Components */}
              <div className="relative z-10 min-h-screen transition-colors duration-300">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route 
                    path="/dashboard/*" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </div>
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
