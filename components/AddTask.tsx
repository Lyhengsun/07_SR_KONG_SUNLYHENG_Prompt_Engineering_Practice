'use client';

import { useState } from 'react';
import { TaskFormData } from '@/types/task';

interface AddTaskProps {
  onAddTask: (taskData: TaskFormData) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim()) {
      onAddTask({
        title: formData.title.trim(),
        description: formData.description.trim(),
      });
      setFormData({ title: '', description: '' });
      setIsExpanded(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
        >
          {isExpanded ? 'Less' : 'More'}
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
        >
          Add Task
        </button>
      </div>

      {isExpanded && (
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Add a description (optional)"
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      )}
    </form>
  );
}
