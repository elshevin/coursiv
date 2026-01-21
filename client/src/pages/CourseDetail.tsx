import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "wouter";
import { courses, Course, CourseModule } from "../../../shared/courseData";
import { trpc } from "@/lib/trpc";
import { useEmailAuth } from "../hooks/useEmailAuth";
import { useTestMode } from "../contexts/TestModeContext";
import { SnakePath } from "@/components/SnakePath";
import { ModulePreviewPopover } from "@/components/ModulePreviewPopover";
import { toast } from "sonner";
import CourseDropdown from "@/components/CourseDropdown";

type ModuleStatus = "completed" | "current" | "locked" | "available";

export default function CourseDetail() {
  const params = useParams<{ courseId: string }>();
  const courseId = params.courseId;
  const [, setLocation] = useLocation();
  const { user, isLoading, isAuthenticated } = useEmailAuth();
  const { isTestModeEnabled } = useTestMode();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [currentModuleId, setCurrentModuleId] = useState<string | null>(null);
  
  // Popover state
  const [selectedModule, setSelectedModule] = useState<{
    module: CourseModule;
    status: ModuleStatus;
  } | null>(null);
  
  // Fetch course progress
  const { data: progressData, refetch: refetchProgress } = trpc.courses.getProgress.useQuery(
    { courseId: courseId || "" },
    { enabled: !!courseId && !!user, refetchOnWindowFocus: true, refetchOnMount: true }
  );

  useEffect(() => {
    if (courseId) {
      const foundCourse = courses.find(c => c.id === courseId);
      setCourse(foundCourse || null);
    }
  }, [courseId]);

  useEffect(() => {
    if (progressData) {
      let modules: string[] = [];
      if (progressData.completedModules) {
        try {
          const parsed = typeof progressData.completedModules === 'string' 
            ? JSON.parse(progressData.completedModules) 
            : progressData.completedModules;
          // Flatten and clean the array to handle nested arrays
          modules = Array.isArray(parsed) 
            ? parsed.flat(Infinity).filter((item): item is string => typeof item === 'string')
            : [];
        } catch {
          modules = [];
        }
      }
      setCompletedModules(modules);
      setCurrentModuleId(progressData.currentModuleId || null);
    }
  }, [progressData]);

  // Redirect to login if not authenticated (unless in test mode)
  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isTestModeEnabled) {
      setLocation('/login');
    }
  }, [isLoading, isAuthenticated, isTestModeEnabled, setLocation]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render content if not authenticated (will redirect)
  if (!isAuthenticated && !isTestModeEnabled) {
    return null;
  }

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

  const handleModuleClick = (module: CourseModule, status: ModuleStatus) => {
    if (status === "locked") return;
    setSelectedModule({ module, status });
  };

  const handleRead = () => {
    if (!selectedModule) return;
    const { module } = selectedModule;
    
    // All modules now use the unified /lesson/ route with Coursiv-style content
    setLocation(`/lesson/${courseId}/${module.id}`);
    setSelectedModule(null);
  };

  const handleListen = () => {
    toast.info("Audio feature coming soon!", {
      description: "We're working on adding audio lessons.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation("/dashboard/guides")}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <CourseDropdown currentCourseId={courseId || ''} currentCourseTitle={course.title} />
              <p className="text-sm text-gray-500 mt-1">{course.totalLessons} lessons • {course.totalDuration}</p>
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

        {/* Snake Path Learning Path */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Learning Path</h2>
          <p className="text-sm text-gray-500 mb-6">Click on a lesson to start learning</p>
          
          <SnakePath
            levels={course.levels}
            completedModules={completedModules}
            currentModuleId={currentModuleId}
            isTestModeEnabled={isTestModeEnabled}
            onModuleClick={handleModuleClick}
          />
        </div>
      </div>

      {/* Module Preview Popover */}
      {selectedModule && (
        <ModulePreviewPopover
          module={selectedModule.module}
          status={selectedModule.status as "completed" | "current" | "available"}
          onClose={() => setSelectedModule(null)}
          onRead={handleRead}
          onListen={handleListen}
        />
      )}
    </div>
  );
}
