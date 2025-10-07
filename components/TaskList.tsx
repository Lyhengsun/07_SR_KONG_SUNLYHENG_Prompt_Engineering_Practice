'use client';

import { Task } from '@/types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onViewDetail: (task: Task) => void;
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask, onViewDetail }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-xl font-medium text-gray-500 mb-2">No tasks found</h3>
        <p className="text-gray-400">
          {tasks.length === 0 ? 'Create your first task to get started!' : 'Try adjusting your filter to see more tasks.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
}
