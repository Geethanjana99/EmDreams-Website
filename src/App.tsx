import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { isAuthenticated } from './utils/auth';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication on mount
    setIsAdminAuthenticated(isAuthenticated());
  }, []);

  // Check if current URL is admin route
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin' || path.startsWith('/admin')) {
      setCurrentPage('admin');
    }
  }, []);

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    // Admin routes
    if (currentPage === 'admin') {
      if (!isAdminAuthenticated) {
        return <AdminLogin onLoginSuccess={handleAdminLogin} />;
      }
      return <AdminDashboard onLogout={handleAdminLogout} />;
    }

    // Public routes
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  // Don't show navbar/footer on admin pages
  if (currentPage === 'admin') {
    return <div className="min-h-screen w-full bg-background">{renderPage()}</div>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}