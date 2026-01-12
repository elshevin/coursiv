import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronDown, BookOpen } from 'lucide-react';
import { courses as courseData } from '../../../shared/courseData';

interface CourseDropdownProps {
  currentCourseId: string;
  currentCourseTitle: string;
}

export default function CourseDropdown({ currentCourseId, currentCourseTitle }: CourseDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
      >
        <span className="text-2xl">{courseData.find(c => c.id === currentCourseId)?.icon || '📚'}</span>
        <span className="font-semibold text-gray-800">{currentCourseTitle}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[600px] max-w-[90vw] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span>Switch Course</span>
          </div>
          
          {/* Horizontal Course Grid */}
          <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
            {courseData.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.id}`}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all hover:bg-gray-50 ${
                  course.id === currentCourseId 
                    ? 'bg-indigo-50 border-2 border-indigo-500' 
                    : 'border-2 border-transparent'
                }`}
              >
                <span className="text-3xl mb-2">{course.icon}</span>
                <span className={`text-sm font-medium text-center ${
                  course.id === currentCourseId ? 'text-indigo-600' : 'text-gray-700'
                }`}>
                  {course.title}
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  {course.totalLessons} lessons
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
