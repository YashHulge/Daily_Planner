import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold tracking-tight">PlanEase</h1>
          <p className="text-blue-100 mt-1 text-sm">Your Daily Planner</p>
        </div>
        
        <div className="p-6">
          <TaskForm onAddTask={addTask} />
          
          <div className="mt-6">
            <TaskList 
              tasks={tasks} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}