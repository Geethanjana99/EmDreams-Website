import React, { useState, useEffect } from 'react';
import type { TeamMember } from '../../types';
import { getTeamMembers, saveTeamMembers } from '../../utils/storage';
import { teamMembers as defaultTeamMembers } from '../../data/team';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog } from '../../components/ui/dialog';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const TeamManager: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<TeamMember>({
    name: '',
    role: '',
    department: '',
    image: '',
    bio: '',
    skills: [''],
    social: {
      github: '',
      linkedin: '',
      twitter: '',
    },
  });

  useEffect(() => {
    const savedMembers = getTeamMembers();
    setTeamMembers(savedMembers || defaultTeamMembers);
  }, []);

  const handleSave = () => {
    let updatedMembers: TeamMember[];
    if (editingIndex !== null) {
      updatedMembers = [...teamMembers];
      updatedMembers[editingIndex] = formData;
    } else {
      updatedMembers = [...teamMembers, formData];
    }
    setTeamMembers(updatedMembers);
    saveTeamMembers(updatedMembers);
    resetForm();
  };

  const handleEdit = (index: number) => {
    setFormData(teamMembers[index]);
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      const updatedMembers = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(updatedMembers);
      saveTeamMembers(updatedMembers);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      role: '',
      department: '',
      image: '',
      bio: '',
      skills: [''],
      social: {
        github: '',
        linkedin: '',
        twitter: '',
      },
    });
    setEditingIndex(null);
    setIsDialogOpen(false);
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ''],
    });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const removeSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Team Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
          <Plus size={18} />
          <span>Add Team Member</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 flex-1">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  {member.department && (
                    <p className="text-gray-600 text-sm">{member.department}</p>
                  )}
                  <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingIndex !== null ? 'Edit Team Member' : 'Add New Team Member'}
                </h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600" aria-label="Close dialog">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Job title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <Input
                    value={formData.department || ''}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="Department (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <Textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Brief biography"
                    rows={4}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <Button size="sm" onClick={addSkill}>
                      <Plus size={14} />
                    </Button>
                  </div>
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        placeholder="Skill name"
                      />
                      {formData.skills.length > 1 && (
                        <Button variant="outline" size="sm" onClick={() => removeSkill(index)}>
                          <X size={14} />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Social Links (Optional)</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">GitHub</label>
                      <Input
                        value={formData.social?.github || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          social: { ...formData.social, github: e.target.value }
                        })}
                        placeholder="https://github.com/username"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 mb-1">LinkedIn</label>
                      <Input
                        value={formData.social?.linkedin || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          social: { ...formData.social, linkedin: e.target.value }
                        })}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Twitter</label>
                      <Input
                        value={formData.social?.twitter || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          social: { ...formData.social, twitter: e.target.value }
                        })}
                        placeholder="https://twitter.com/username"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3 sticky bottom-0 bg-white">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="flex items-center space-x-2">
                  <Save size={18} />
                  <span>Save Member</span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};
