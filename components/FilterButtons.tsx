'use client';

import { TaskStatus } from '@/types/task';

interface FilterButtonsProps {
  currentFilter: TaskStatus;
  onFilterChange: (filter: TaskStatus) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export default function FilterButtons({ currentFilter, onFilterChange, taskCounts }: FilterButtonsProps) {
  const filters: { key: TaskStatus; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: taskCounts.all },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="flex gap-2">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentFilter === key
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
}
