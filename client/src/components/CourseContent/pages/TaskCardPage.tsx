import React from 'react';
import type { TaskCardPage as TaskCardPageType } from '../types';

interface TaskCardPageProps {
  content: TaskCardPageType['content'];
  onOpenPlayground: (playgroundId: string) => void;
}

export const TaskCardPage: React.FC<TaskCardPageProps> = ({ 
  content,
  onOpenPlayground
}) => {
  return (
    <div className="px-6 py-8">
      {/* Context Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {content.contextTitle}
        </h2>
        <p className="text-gray-600">
          {content.contextDescription}
        </p>
      </div>

      {/* Task Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm">
        {/* Task Icon */}
        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
          <span className="text-2xl">✏️</span>
        </div>

        {/* Task Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {content.task.title}
        </h3>

        {/* Task Description */}
        <p className="text-gray-600 mb-6">
          {content.task.description}
        </p>

        {/* Open Playground Button */}
        <button
          onClick={() => onOpenPlayground(content.task.playgroundId)}
          className="w-full py-4 rounded-xl font-semibold text-base bg-[#7C3AED] text-white hover:bg-[#5B21B6] active:scale-[0.98] transition-all duration-200"
        >
          {content.task.buttonText}
        </button>
      </div>
    </div>
  );
};

export default TaskCardPage;
