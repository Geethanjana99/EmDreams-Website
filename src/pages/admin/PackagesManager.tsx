import React, { useState, useEffect } from 'react';
import type { ServiceCategoryData } from '../../types/admin';
import { getServicePackages, saveServicePackages } from '../../utils/storage';
import { serviceCategories as defaultPackages } from '../../data/servicePackages';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog } from '../../components/ui/dialog';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const PackagesManager: React.FC = () => {
  const [packages, setPackages] = useState<ServiceCategoryData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<ServiceCategoryData>({
    id: '',
    name: '',
    summary: '',
    benefits: [''],
    packages: [
      {
        name: '',
        price: '',
        description: '',
        features: [''],
      },
    ],
  });

  useEffect(() => {
    const savedPackages = getServicePackages();
    setPackages(savedPackages || defaultPackages);
  }, []);

  const handleSave = () => {
    let updatedPackages: ServiceCategoryData[];
    if (editingIndex !== null) {
      updatedPackages = [...packages];
      updatedPackages[editingIndex] = formData;
    } else {
      updatedPackages = [...packages, formData];
    }
    setPackages(updatedPackages);
    saveServicePackages(updatedPackages);
    resetForm();
  };

  const handleEdit = (index: number) => {
    setFormData(packages[index]);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this service category?')) {
      const updatedPackages = packages.filter((_, i) => i !== index);
      setPackages(updatedPackages);
      saveServicePackages(updatedPackages);
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      summary: '',
      benefits: [''],
      packages: [
        {
          name: '',
          price: '',
          description: '',
          features: [''],
        },
      ],
    });
    setEditingIndex(null);
    setIsDialogOpen(false);
  };

  const addBenefit = () => {
    setFormData({ ...formData, benefits: [...formData.benefits, ''] });
  };

  const updateBenefit = (index: number, value: string) => {
    const newBenefits = [...formData.benefits];
    newBenefits[index] = value;
    setFormData({ ...formData, benefits: newBenefits });
  };

  const removeBenefit = (index: number) => {
    setFormData({ ...formData, benefits: formData.benefits.filter((_, i) => i !== index) });
  };

  const addPackage = () => {
    setFormData({
      ...formData,
      packages: [
        ...formData.packages,
        {
          name: '',
          price: '',
          description: '',
          features: [''],
        },
      ],
    });
  };

  const updatePackage = (index: number, field: string, value: string | boolean) => {
    const newPackages = [...formData.packages];
    newPackages[index] = { ...newPackages[index], [field]: value };
    setFormData({ ...formData, packages: newPackages });
  };

  const removePackage = (index: number) => {
    setFormData({
      ...formData,
      packages: formData.packages.filter((_, i) => i !== index),
    });
  };

  const addFeature = (packageIndex: number) => {
    const newPackages = [...formData.packages];
    newPackages[packageIndex].features.push('');
    setFormData({ ...formData, packages: newPackages });
  };

  const updateFeature = (packageIndex: number, featureIndex: number, value: string) => {
    const newPackages = [...formData.packages];
    newPackages[packageIndex].features[featureIndex] = value;
    setFormData({ ...formData, packages: newPackages });
  };

  const removeFeature = (packageIndex: number, featureIndex: number) => {
    const newPackages = [...formData.packages];
    newPackages[packageIndex].features = newPackages[packageIndex].features.filter(
      (_, i) => i !== featureIndex
    );
    setFormData({ ...formData, packages: newPackages });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Service Packages Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
          <Plus size={18} />
          <span>Add Category</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {packages.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-600 mt-1">{category.summary}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {category.packages.map((pkg, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                  <p className="text-2xl font-bold text-blue-600 my-2">{pkg.price}</p>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for Add/Edit */}
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingIndex !== null ? 'Edit Service Category' : 'Add New Service Category'}
                </h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600" aria-label="Close dialog">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ID</label>
                    <Input
                      value={formData.id}
                      onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                      placeholder="Category ID (e.g., web, mobile)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Category name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Summary</label>
                  <Textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Category summary"
                    rows={3}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Benefits</label>
                    <Button size="sm" onClick={addBenefit}>
                      <Plus size={14} />
                    </Button>
                  </div>
                  {formData.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={benefit}
                        onChange={(e) => updateBenefit(index, e.target.value)}
                        placeholder="Benefit"
                      />
                      {formData.benefits.length > 1 && (
                        <Button variant="outline" size="sm" onClick={() => removeBenefit(index)}>
                          <X size={14} />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Pricing Packages</h4>
                    <Button size="sm" onClick={addPackage}>
                      <Plus size={14} className="mr-1" /> Add Package
                    </Button>
                  </div>

                  {formData.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-medium text-gray-900">Package {pkgIndex + 1}</h5>
                        {formData.packages.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removePackage(pkgIndex)}
                          >
                            <Trash2 size={14} />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <Input
                          value={pkg.name}
                          onChange={(e) => updatePackage(pkgIndex, 'name', e.target.value)}
                          placeholder="Package name"
                        />
                        <Input
                          value={pkg.price}
                          onChange={(e) => updatePackage(pkgIndex, 'price', e.target.value)}
                          placeholder="Price (e.g., $5,000)"
                        />
                      </div>

                      <Textarea
                        value={pkg.description}
                        onChange={(e) => updatePackage(pkgIndex, 'description', e.target.value)}
                        placeholder="Package description"
                        rows={2}
                        className="mb-3"
                      />

                      <div className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          id={`highlighted-${pkgIndex}`}
                          checked={pkg.highlighted || false}
                          onChange={(e) => updatePackage(pkgIndex, 'highlighted', e.target.checked)}
                          className="mr-2"
                        />
                        <label htmlFor={`highlighted-${pkgIndex}`} className="text-sm text-gray-700">
                          Highlight this package
                        </label>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-700">Features</label>
                          <Button size="sm" onClick={() => addFeature(pkgIndex)}>
                            <Plus size={12} />
                          </Button>
                        </div>
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex gap-2 mb-2">
                            <Input
                              value={feature}
                              onChange={(e) =>
                                updateFeature(pkgIndex, featureIndex, e.target.value)
                              }
                              placeholder="Feature"
                              className="text-sm"
                            />
                            {pkg.features.length > 1 && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeFeature(pkgIndex, featureIndex)}
                              >
                                <X size={12} />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3 sticky bottom-0 bg-white">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save size={18} />
                  <span>Save Category</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
