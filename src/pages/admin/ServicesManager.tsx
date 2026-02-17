import React, { useState, useEffect } from 'react';
import type { ServiceData } from '../../types/admin';
import { getServices, saveServices } from '../../utils/storage';
import { servicesData as defaultServices } from '../../data/services';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog } from '../../components/ui/dialog';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const ServicesManager: React.FC = () => {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<ServiceData>({
    title: '',
    description: '',
  });

  useEffect(() => {
    const savedServices = getServices();
    setServices(savedServices || defaultServices);
  }, []);

  const handleSave = () => {
    let updatedServices: ServiceData[];
    if (editingIndex !== null) {
      updatedServices = [...services];
      updatedServices[editingIndex] = formData;
    } else {
      updatedServices = [...services, formData];
    }
    setServices(updatedServices);
    saveServices(updatedServices);
    resetForm();
  };

  const handleEdit = (index: number) => {
    setFormData(services[index]);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter((_, i) => i !== index);
      setServices(updatedServices);
      saveServices(updatedServices);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
    });
    setEditingIndex(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Services Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
          <Plus size={18} />
          <span>Add Service</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
                  {editingIndex !== null ? 'Edit Service' : 'Add New Service'}
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
                    placeholder="Service title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Service description"
                    rows={4}
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save size={18} />
                  <span>Save Service</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
