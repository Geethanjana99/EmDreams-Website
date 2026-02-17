import React, { useState, useEffect } from 'react';
import type { ContactInfoData } from '../../types/admin';
import { getContactInfo, saveContactInfo } from '../../utils/storage';
import { contactInfoData as defaultContactInfo } from '../../data/contact';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Dialog } from '../../components/ui/dialog';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const ContactInfoManager: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfoData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<ContactInfoData>({
    title: '',
    description: '',
    action: '',
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await getContactInfo();
      setContactInfo(data.length > 0 ? data : defaultContactInfo);
    };
    loadData();
  }, []);

  const handleSave = async () => {
    let updatedContactInfo: ContactInfoData[];
    if (editingIndex !== null) {
      updatedContactInfo = [...contactInfo];
      updatedContactInfo[editingIndex] = formData;
    } else {
      updatedContactInfo = [...contactInfo, formData];
    }
    const success = await saveContactInfo(updatedContactInfo);
    if (success) {
      setContactInfo(updatedContactInfo);
      resetForm();
    } else {
      alert('Error saving contact info. Please try again.');
    }
  };

  const handleEdit = (index: number) => {
    setFormData(contactInfo[index]);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = async (index: number) => {
    if (confirm('Are you sure you want to delete this contact info?')) {
      const updatedContactInfo = contactInfo.filter((_, i) => i !== index);
      const success = await saveContactInfo(updatedContactInfo);
      if (success) {
        setContactInfo(updatedContactInfo);
      } else {
        alert('Error deleting contact info. Please try again.');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      action: '',
    });
    setEditingIndex(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Contact Information Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
          <Plus size={18} />
          <span>Add Contact Info</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-gray-600 mb-1">{info.description}</p>
                <p className="text-sm text-blue-600">{info.action}</p>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button variant="outline" size="sm" onClick={() => handleEdit(index)}>
                  <Edit2 size={16} />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(index)}>
                  <Trash2 size={16} className="text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for Add/Edit */}
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingIndex !== null ? 'Edit Contact Info' : 'Add New Contact Info'}
                </h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600" aria-label="Close dialog">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Email, WhatsApp, Location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <Input
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="e.g., contact@emdreams.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Action Text</label>
                  <Input
                    value={formData.action}
                    onChange={(e) => setFormData({ ...formData, action: e.target.value })}
                    placeholder="e.g., Send us an email"
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save size={18} />
                  <span>Save Contact Info</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
