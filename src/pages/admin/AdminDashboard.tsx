import React, { useState, useEffect } from 'react';
import { logout } from '../../utils/auth';
import { Button } from '../../components/ui/button';
import { ProjectsManager } from './ProjectsManager';
import { TeamManager } from './TeamManager';
import { ServicesManager } from './ServicesManager';
import { PackagesManager } from './PackagesManager';
import { FAQsManager } from './FAQsManager';
import { ContactInfoManager } from './ContactInfoManager';
import { CompanyInfoManager } from './CompanyInfoManager';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  Briefcase, 
  Package, 
  HelpCircle, 
  Mail,
  Building2,
  LogOut 
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

type TabType = 'overview' | 'projects' | 'team' | 'services' | 'packages' | 'faqs' | 'contact' | 'company';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [counts, setCounts] = useState({
    projects: 0,
    team: 0,
    services: 0,
    packages: 0,
    faqs: 0,
    contact: 0,
  });

  const updateCounts = () => {
    const getCount = (key: string): number => {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data).length : 0;
      } catch {
        return 0;
      }
    };

    setCounts({
      projects: getCount('emdreams_projects'),
      team: getCount('emdreams_team'),
      services: getCount('emdreams_services'),
      packages: getCount('emdreams_service_packages'),
      faqs: getCount('emdreams_faqs'),
      contact: getCount('emdreams_contact_info'),
    });
  };

  useEffect(() => {
    updateCounts();
  }, []);

  useEffect(() => {
    if (activeTab === 'overview') {
      updateCounts();
    }
  }, [activeTab]);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: LayoutDashboard },
    { id: 'company' as TabType, label: 'Company Info', icon: Building2 },
    { id: 'projects' as TabType, label: 'Projects', icon: FolderKanban },
    { id: 'team' as TabType, label: 'Team', icon: Users },
    { id: 'services' as TabType, label: 'Services', icon: Briefcase },
    { id: 'packages' as TabType, label: 'Packages', icon: Package },
    { id: 'faqs' as TabType, label: 'FAQs', icon: HelpCircle },
    { id: 'contact' as TabType, label: 'Contact Info', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Projects</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">
                      {counts.projects}
                    </p>
                  </div>
                  <FolderKanban className="text-blue-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Team Members</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">
                      {counts.team}
                    </p>
                  </div>
                  <Users className="text-green-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Service Packages</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">
                      {counts.packages}
                    </p>
                  </div>
                  <Package className="text-purple-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Services</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">
                      {counts.services}
                    </p>
                  </div>
                  <Briefcase className="text-orange-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">FAQs</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">
                      {counts.faqs}
                    </p>
                  </div>
                  <HelpCircle className="text-yellow-500" size={32} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Contact Info Items</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">
                      {counts.contact}
                    </p>
                  </div>
                  <Mail className="text-red-500" size={32} />
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to EmDreams Admin Panel</h3>
              <p className="text-blue-700">
                Manage your website content from this centralized dashboard. Use the navigation menu on the left to edit different sections.
              </p>
            </div>
          </div>
        );
      case 'projects':
        return <ProjectsManager />;
      case 'team':
        return <TeamManager />;
      case 'services':
        return <ServicesManager />;
      case 'packages':
        return <PackagesManager />;
      case 'faqs':
        return <FAQsManager />;
      case 'contact':
        return <ContactInfoManager />;
      case 'company':
        return <CompanyInfoManager />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">EmDreams Admin</h1>
          <p className="text-sm text-gray-600 mt-1">Content Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center justify-center space-x-2"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
