import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "wouter";
import { courses, Course, CourseModule, CourseLevel } from "../../../shared/courseData";
import { trpc } from "@/lib/trpc";
import { useEmailAuth } from "../hooks/useEmailAuth";
import { useTestMode } from "../contexts/TestModeContext";

export default function CourseDetail() {
  const params = useParams<{ courseId: string }>();
  const courseId = params.courseId;
  const [, setLocation] = useLocation();
  const { user } = useEmailAuth();
  const { isTestModeEnabled } = useTestMode();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [currentModuleId, setCurrentModuleId] = useState<string | null>(null);
  
  // Fetch course progress
  const { data: progressData, refetch: refetchProgress } = trpc.courses.getProgress.useQuery(
    { courseId: courseId || "" },
    { enabled: !!courseId && !!user }
  );
  
  const completeModuleMutation = trpc.courses.completeModule.useMutation();

  useEffect(() => {
    if (courseId) {
      const foundCourse = courses.find(c => c.id === courseId);
      setCourse(foundCourse || null);
    }
  }, [courseId]);

  useEffect(() => {
    if (progressData) {
      // Parse completedModules from JSON string if needed
      const modules = progressData.completedModules 
        ? (typeof progressData.completedModules === 'string' 
            ? JSON.parse(progressData.completedModules) 
            : progressData.completedModules)
        : [];
      setCompletedModules(modules);
      setCurrentModuleId(progressData.currentModuleId || null);
    }
  }, [progressData]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h1>
          <Link href="/dashboard/guides" className="text-purple-600 hover:underline">
            Back to Guides
          </Link>
        </div>
      </div>
    );
  }

  // Flatten all modules from all levels
  const allModules: CourseModule[] = course.levels.flatMap(level => level.modules);
  const totalModules = allModules.length;
  const completedCount = completedModules.length;
  const progressPercent = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  const handleStartModule = async (moduleId: string, moduleType: string) => {
    if (moduleType === 'quiz') {
      setLocation(`/course-quiz/${courseId}/${moduleId}`);
    } else {
      setLocation(`/lesson/${courseId}/${moduleId}`);
    }
  };

  const isModuleLocked = (module: CourseModule, levelIndex: number, moduleIndex: number): boolean => {
    if (isTestModeEnabled) return false; // In test mode, all modules are unlocked
    if (levelIndex === 0 && moduleIndex === 0) return false; // First module is always unlocked
    
    // Get all previous modules
    const allPreviousModules: CourseModule[] = [];
    for (let i = 0; i <= levelIndex; i++) {
      const level = course.levels[i];
      const modulesToAdd = i === levelIndex 
        ? level.modules.slice(0, moduleIndex) 
        : level.modules;
      allPreviousModules.push(...modulesToAdd);
    }
    
    // Check if all previous modules are completed
    return allPreviousModules.some(m => !completedModules.includes(m.id));
  };

  const getModuleStatus = (module: CourseModule, levelIndex: number, moduleIndex: number): "completed" | "current" | "locked" | "available" => {
    if (completedModules.includes(module.id)) return "completed";
    if (isModuleLocked(module, levelIndex, moduleIndex)) return "locked";
    if (currentModuleId === module.id) return "current";
    return "available";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation("/dashboard/guides")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-800">{course.title}</h1>
              <p className="text-sm text-gray-500">{course.totalLessons} lessons • {course.totalDuration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Progress Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Your Progress</h2>
              <p className="text-sm text-gray-500">{completedCount} of {totalModules} lessons completed</p>
            </div>
            <div className="text-3xl font-bold text-purple-600">{progressPercent}%</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Course Description */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">About this course</h2>
          <p className="text-gray-600">{course.description}</p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-2xl">{course.icon}</span>
              <span>{course.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.totalDuration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{course.levels.length} levels</span>
            </div>
          </div>
        </div>

        {/* Learning Path by Levels */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Learning Path</h2>
          
          {course.levels.map((level, levelIndex) => (
            <div key={level.id} className="mb-8 last:mb-0">
              {/* Level Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  level.unlocked || isTestModeEnabled ? 'bg-purple-100' : 'bg-gray-200'
                }`}>
                  <span className={`font-bold ${level.unlocked || isTestModeEnabled ? 'text-purple-600' : 'text-gray-500'}`}>
                    {levelIndex + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{level.title}</h3>
                  <p className="text-sm text-gray-500">{level.description}</p>
                </div>
              </div>
              
              {/* Modules in this level */}
              <div className="relative ml-5 pl-5 border-l-2 border-gray-200">
                <div className="space-y-3">
                  {level.modules.map((module, moduleIndex) => {
                    const status = getModuleStatus(module, levelIndex, moduleIndex);
                    
                    return (
                      <div key={module.id} className="relative flex items-start gap-3">
                        {/* Node */}
                        <div className={`absolute -left-[27px] w-6 h-6 rounded-full flex items-center justify-center ${
                          status === "completed" ? "bg-green-500" :
                          status === "current" ? "bg-purple-500" :
                          status === "locked" ? "bg-gray-300" :
                          "bg-purple-100"
                        }`}>
                          {status === "completed" ? (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : status === "locked" ? (
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          ) : (
                            <span className={`text-xs font-bold ${status === "current" ? "text-white" : "text-purple-600"}`}>
                              {moduleIndex + 1}
                            </span>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className={`flex-1 bg-gray-50 rounded-lg p-3 ${status === "locked" ? "opacity-60" : ""}`}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-gray-800 text-sm">{module.title}</h4>
                                {module.type === 'quiz' && (
                                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Quiz</span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">{module.duration}</p>
                            </div>
                            
                            {status !== "locked" && (
                              <button
                                onClick={() => handleStartModule(module.id, module.type)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                  status === "completed"
                                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                                    : "bg-purple-600 text-white hover:bg-purple-700"
                                }`}
                              >
                                {status === "completed" ? "Review" : status === "current" ? "Continue" : "Start"}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
