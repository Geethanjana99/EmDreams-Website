import React, { useState, useEffect } from 'react';
import type { CompanyInfo } from '../../types';
import { getCompanyInfo, saveCompanyInfo } from '../../utils/storage';
import { COMPANY_INFO } from '../../constants';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Save } from 'lucide-react';

export const CompanyInfoManager: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    tagline: COMPANY_INFO.tagline,
    description: COMPANY_INFO.description,
    stats: COMPANY_INFO.stats,
  });

  useEffect(() => {
    const loadData = async () => {
      const savedInfo = await getCompanyInfo();
      if (savedInfo) {
        setCompanyInfo(savedInfo);
      }
    };
    loadData();
  }, []);

  const handleSave = async () => {
    const success = await saveCompanyInfo(companyInfo);
    if (success) {
      alert('Company information saved successfully!');
    } else {
      alert('Error saving company information. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
        <Button onClick={handleSave} className="flex items-center space-x-2">
          <Save size={18} />
          <span>Save Changes</span>
        </Button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-6">
        {/* Hero Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Hero Section</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tagline
              <span className="text-gray-500 text-xs ml-2">(Use periods to separate lines)</span>
            </label>
            <Input
              value={companyInfo.tagline}
              onChange={(e) => setCompanyInfo({ ...companyInfo, tagline: e.target.value })}
              placeholder="Build. Market. Deliver."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <Textarea
              value={companyInfo.description}
              onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })}
              placeholder="Enter company description"
              rows={3}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Projects Completed</label>
              <Input
                type="number"
                value={companyInfo.stats.projectsCompleted}
                onChange={(e) => setCompanyInfo({
                  ...companyInfo,
                  stats: { ...companyInfo.stats, projectsCompleted: parseInt(e.target.value) || 0 }
                })}
                placeholder="150"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Clients Served</label>
              <Input
                type="number"
                value={companyInfo.stats.clientsServed}
                onChange={(e) => setCompanyInfo({
                  ...companyInfo,
                  stats: { ...companyInfo.stats, clientsServed: parseInt(e.target.value) || 0 }
                })}
                placeholder="50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
              <Input
                type="number"
                value={companyInfo.stats.yearsOfExperience}
                onChange={(e) => setCompanyInfo({
                  ...companyInfo,
                  stats: { ...companyInfo.stats, yearsOfExperience: parseInt(e.target.value) || 0 }
                })}
                placeholder="8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
