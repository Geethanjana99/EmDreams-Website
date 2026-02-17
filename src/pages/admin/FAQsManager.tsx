import React, { useState, useEffect } from 'react';
import type { FAQ } from '../../types';
import { getFAQs, saveFAQs } from '../../utils/storage';
import { faqs as defaultFAQs } from '../../data/contact';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog } from '../../components/ui/dialog';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const FAQsManager: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FAQ>({
    question: '',
    answer: '',
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await getFAQs();
      setFaqs(data.length > 0 ? data : defaultFAQs);
    };
    loadData();
  }, []);

  const handleSave = async () => {
    let updatedFAQs: FAQ[];
    if (editingIndex !== null) {
      updatedFAQs = [...faqs];
      updatedFAQs[editingIndex] = formData;
    } else {
      updatedFAQs = [...faqs, formData];
    }
    const success = await saveFAQs(updatedFAQs);
    if (success) {
      setFaqs(updatedFAQs);
      resetForm();
    } else {
      alert('Error saving FAQ. Please try again.');
    }
  };

  const handleEdit = (index: number) => {
    setFormData(faqs[index]);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = async (index: number) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      const updatedFAQs = faqs.filter((_, i) => i !== index);
      const success = await saveFAQs(updatedFAQs);
      if (success) {
        setFaqs(updatedFAQs);
      } else {
        alert('Error deleting FAQ. Please try again.');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      question: '',
      answer: '',
    });
    setEditingIndex(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">FAQs Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
          <Plus size={18} />
          <span>Add FAQ</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
                  {editingIndex !== null ? 'Edit FAQ' : 'Add New FAQ'}
                </h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600" aria-label="Close dialog">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                  <Input
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    placeholder="Enter the question"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                  <Textarea
                    value={formData.answer}
                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                    placeholder="Enter the answer"
                    rows={5}
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save size={18} />
                  <span>Save FAQ</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
