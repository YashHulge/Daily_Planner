import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
      task.completed ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
    }`}>
      <div className="flex items-center gap-3 overflow-hidden">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
        />
        <div className="flex flex-col truncate">
          <span className={`text-slate-800 font-medium truncate transition-all ${
            task.completed ? 'line-through text-slate-400' : ''
          }`}>
            {task.name}
          </span>
          <span className={`text-xs mt-0.5 font-medium ${
            task.completed ? 'text-emerald-500' : 'text-amber-500'
          }`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
      
      <button
        onClick={() => onDelete(task.id)}
        className="ml-3 text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors"
        aria-label="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
  );
}