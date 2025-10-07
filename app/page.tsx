'use client';

import { useState, useEffect } from 'react';
import { Task, TaskStatus, TaskFormData } from '@/types/task';
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import FilterButtons from '@/components/FilterButtons';
import TaskDetail from '@/components/TaskDetail';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskStatus>('all');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todo-tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
        }));
        setTasks(parsedTasks);
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (id: string, taskData: TaskFormData) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, ...taskData, updatedAt: new Date() }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    if (selectedTask?.id === id) {
      setSelectedTask(null);
      setIsDetailOpen(false);
    }
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task
      )
    );
  };

  const viewTaskDetail = (task: Task) => {
    setSelectedTask(task);
    setIsDetailOpen(true);
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Todo List App
            </h1>
            <p className="text-gray-600">
              Organize your tasks efficiently with our modern todo app
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <AddTask onAddTask={addTask} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your Tasks
              </h2>
              <FilterButtons
                currentFilter={filter}
                onFilterChange={setFilter}
                taskCounts={{
                  all: tasks.length,
                  active: tasks.filter(t => !t.completed).length,
                  completed: tasks.filter(t => t.completed).length,
                }}
              />
            </div>

            <TaskList
              tasks={filteredTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              onViewDetail={viewTaskDetail}
            />
          </div>
        </div>
      </div>

      {isDetailOpen && selectedTask && (
        <TaskDetail
          task={selectedTask}
          onClose={() => {
            setIsDetailOpen(false);
            setSelectedTask(null);
          }}
          onUpdate={(taskData) => {
            updateTask(selectedTask.id, taskData);
            setSelectedTask({ ...selectedTask, ...taskData, updatedAt: new Date() });
          }}
          onDelete={() => {
            deleteTask(selectedTask.id);
          }}
        />
      )}
    </div>
  );
}
