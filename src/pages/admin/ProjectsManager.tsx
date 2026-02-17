import React, { useState, useEffect } from 'react';
import type { Project } from '../../types';
import { getProjects, saveProjects } from '../../utils/storage';
import { projects as defaultProjects } from '../../data/projects';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog } from '../../components/ui/dialog';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const ProjectsManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Project>({
    title: '',
    category: 'web',
    description: '',
    image: '',
    details: {
      challenge: '',
      solution: '',
      results: [''],
      technologies: [''],
    },
    contributors: [''],
  });

  useEffect(() => {
    const savedProjects = getProjects();
    setProjects(savedProjects || defaultProjects);
  }, []);

  const handleSave = () => {
    let updatedProjects: Project[];
    if (editingIndex !== null) {
      updatedProjects = [...projects];
      updatedProjects[editingIndex] = formData;
    } else {
      updatedProjects = [...projects, formData];
    }
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
    resetForm();
  };

  const handleEdit = (index: number) => {
    setFormData(projects[index]);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
      saveProjects(updatedProjects);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'web',
      description: '',
      image: '',
      details: {
        challenge: '',
        solution: '',
        results: [''],
        technologies: [''],
      },
      contributors: [''],
    });
    setEditingIndex(null);
    setIsDialogOpen(false);
  };

  const addArrayItem = (field: 'results' | 'technologies') => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        [field]: [...formData.details[field], ''],
      },
    });
  };

  const addContributor = () => {
    setFormData({
      ...formData,
      contributors: [...(formData.contributors || []), ''],
    });
  };

  const updateArrayItem = (field: 'results' | 'technologies', index: number, value: string) => {
    const newArray = [...formData.details[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        [field]: newArray,
      },
    });
  };

  const updateContributor = (index: number, value: string) => {
    const newArray = [...(formData.contributors || [])];
    newArray[index] = value;
    setFormData({
      ...formData,
      contributors: newArray,
    });
  };

  const removeArrayItem = (field: 'results' | 'technologies', index: number) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        [field]: formData.details[field].filter((_, i) => i !== index),
      },
    });
  };

  const removeContributor = (index: number) => {
    setFormData({
      ...formData,
      contributors: (formData.contributors || []).filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Projects Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
          <Plus size={18} />
          <span>Add Project</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.details.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.contributors && project.contributors.length > 0 && project.contributors[0] && (
                  <div className="text-sm text-gray-500">
                    <strong>Contributors:</strong> {project.contributors.filter(c => c).join(', ')}
                  </div>
                )}
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
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingIndex !== null ? 'Edit Project' : 'Add New Project'}
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
                    placeholder="Project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    aria-label="Project category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="cloud">Cloud</option>
                    <option value="ai">AI/ML</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief project description"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Challenge</label>
                  <Textarea
                    value={formData.details.challenge}
                    onChange={(e) => setFormData({
                      ...formData,
                      details: { ...formData.details, challenge: e.target.value }
                    })}
                    placeholder="What was the main challenge?"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Solution</label>
                  <Textarea
                    value={formData.details.solution}
                    onChange={(e) => setFormData({
                      ...formData,
                      details: { ...formData.details, solution: e.target.value }
                    })}
                    placeholder="How did you solve it?"
                    rows={3}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Results</label>
                    <Button size="sm" onClick={() => addArrayItem('results')}>
                      <Plus size={14} />
                    </Button>
                  </div>
                  {formData.details.results.map((result, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={result}
                        onChange={(e) => updateArrayItem('results', index, e.target.value)}
                        placeholder="Result achievement"
                      />
                      {formData.details.results.length > 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem('results', index)}
                        >
                          <X size={14} />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Technologies</label>
                    <Button size="sm" onClick={() => addArrayItem('technologies')}>
                      <Plus size={14} />
                    </Button>
                  </div>
                  {formData.details.technologies.map((tech, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={tech}
                        onChange={(e) => updateArrayItem('technologies', index, e.target.value)}
                        placeholder="Technology name"
                      />
                      {formData.details.technologies.length > 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeArrayItem('technologies', index)}
                        >
                          <X size={14} />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Contributors</label>
                    <Button size="sm" onClick={addContributor}>
                      <Plus size={14} />
                    </Button>
                  </div>
                  {(formData.contributors || ['']).map((contributor, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={contributor}
                        onChange={(e) => updateContributor(index, e.target.value)}
                        placeholder="Contributor name"
                      />
                      {(formData.contributors || []).length > 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeContributor(index)}
                        >
                          <X size={14} />
                        </Button>
                      )}
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
                  <span>Save Project</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
