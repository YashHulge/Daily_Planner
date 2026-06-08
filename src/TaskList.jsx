import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  // Requirement 5: Conditional Rendering for empty state
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
        <p>No tasks available. Add one!</p>
      </div>
    );
  }

  return (
    <div>
      {/* Requirement 5: Conditional Rendering for existing tasks */}
      <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-600">
        <span>Total Tasks: {tasks.length}</span>
      </div>
      
      <ul className="space-y-3">
        {/* Requirement 2: Display Tasks (Lists & Keys) */}
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={onToggle} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
}