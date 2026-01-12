import { useState, useRef, useEffect } from "react";
import { CourseModule, CourseLevel } from "../../../shared/courseData";

interface SnakePathProps {
  levels: CourseLevel[];
  completedModules: string[];
  currentModuleId: string | null;
  isTestModeEnabled: boolean;
  onModuleClick: (module: CourseModule, status: ModuleStatus) => void;
}

type ModuleStatus = "completed" | "current" | "locked" | "available";

interface ModuleWithPosition {
  module: CourseModule;
  levelIndex: number;
  moduleIndex: number;
  globalIndex: number;
  status: ModuleStatus;
  position: "left" | "right";
}

export function SnakePath({
  levels,
  completedModules,
  currentModuleId,
  isTestModeEnabled,
  onModuleClick,
}: SnakePathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([]);

  // Flatten all modules with their positions
  const modulesWithPosition: ModuleWithPosition[] = [];
  let globalIndex = 0;
  
  levels.forEach((level, levelIndex) => {
    level.modules.forEach((module, moduleIndex) => {
      const status = getModuleStatus(module, levelIndex, moduleIndex, levels, completedModules, currentModuleId, isTestModeEnabled);
      // Snake pattern: alternate left/right based on global index
      const position: "left" | "right" = globalIndex % 2 === 0 ? "left" : "right";
      
      modulesWithPosition.push({
        module,
        levelIndex,
        moduleIndex,
        globalIndex,
        status,
        position,
      });
      globalIndex++;
    });
  });

  // Calculate SVG path positions after render
  useEffect(() => {
    if (!containerRef.current) return;
    
    const nodes = containerRef.current.querySelectorAll('[data-module-node]');
    const positions: { x: number; y: number }[] = [];
    
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();
      positions.push({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      });
    });
    
    setNodePositions(positions);
  }, [modulesWithPosition.length]);

  // Generate SVG path for connections
  const generatePath = () => {
    if (nodePositions.length < 2) return "";
    
    let path = `M ${nodePositions[0].x} ${nodePositions[0].y}`;
    
    for (let i = 1; i < nodePositions.length; i++) {
      const prev = nodePositions[i - 1];
      const curr = nodePositions[i];
      
      // Create curved path
      const midY = (prev.y + curr.y) / 2;
      path += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  return (
    <div ref={containerRef} className="relative py-8" data-testid="snake-path-container">
      {/* SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <path
          d={generatePath()}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          strokeDasharray="8 4"
          className="connection-line"
          opacity="0.4"
        />
      </svg>

      {/* Module Nodes */}
      <div className="relative z-10 space-y-6">
        {modulesWithPosition.map((item, index) => (
          <ModuleNode
            key={item.module.id}
            item={item}
            index={index}
            onModuleClick={onModuleClick}
          />
        ))}
      </div>
    </div>
  );
}

interface ModuleNodeProps {
  item: ModuleWithPosition;
  index: number;
  onModuleClick: (module: CourseModule, status: ModuleStatus) => void;
}

function ModuleNode({ item, index, onModuleClick }: ModuleNodeProps) {
  const { module, status, position } = item;
  
  const statusColors = {
    completed: "bg-green-500 border-green-400",
    current: "bg-purple-500 border-purple-400",
    available: "bg-purple-100 border-purple-300",
    locked: "bg-gray-200 border-gray-300",
  };

  const statusIcons = {
    completed: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    current: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      </svg>
    ),
    available: <span className="text-purple-600 font-bold text-lg">{index + 1}</span>,
    locked: (
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  };

  return (
    <div
      className={`flex items-center gap-4 ${position === "right" ? "flex-row-reverse" : ""}`}
      data-testid={`module-node-${index}`}
    >
      {/* Spacer for snake effect */}
      <div className={`flex-1 ${position === "left" ? "max-w-[20%]" : "max-w-[60%]"}`} />
      
      {/* Module Circle */}
      <button
        data-module-node
        onClick={() => status !== "locked" && onModuleClick(module, status)}
        disabled={status === "locked"}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center
          border-4 shadow-lg transition-all duration-300
          ${statusColors[status]}
          ${status !== "locked" ? "cursor-pointer hover:scale-110 hover:shadow-xl" : "cursor-not-allowed"}
          ${item.position === "left" ? "module-left" : "module-right"}
        `}
      >
        {statusIcons[status]}
      </button>

      {/* Module Info Card */}
      <div
        className={`
          flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100
          ${position === "left" ? "max-w-[60%]" : "max-w-[20%] opacity-0 pointer-events-none"}
          ${status === "locked" ? "opacity-50" : ""}
        `}
      >
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-800 text-sm truncate">{module.title}</h4>
          {module.type === "quiz" && (
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full flex-shrink-0">
              Quiz
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500">{module.duration}</p>
      </div>

      {/* Right side info (visible when position is right) */}
      <div
        className={`
          flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100
          ${position === "right" ? "max-w-[60%]" : "max-w-[20%] opacity-0 pointer-events-none"}
          ${status === "locked" ? "opacity-50" : ""}
        `}
      >
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-800 text-sm truncate">{module.title}</h4>
          {module.type === "quiz" && (
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full flex-shrink-0">
              Quiz
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500">{module.duration}</p>
      </div>
    </div>
  );
}

// Helper function to determine module status
function getModuleStatus(
  module: CourseModule,
  levelIndex: number,
  moduleIndex: number,
  levels: CourseLevel[],
  completedModules: string[],
  currentModuleId: string | null,
  isTestModeEnabled: boolean
): ModuleStatus {
  if (completedModules.includes(module.id)) return "completed";
  
  const isLocked = isModuleLocked(module, levelIndex, moduleIndex, levels, completedModules, isTestModeEnabled);
  if (isLocked) return "locked";
  
  if (currentModuleId === module.id) return "current";
  return "available";
}

function isModuleLocked(
  module: CourseModule,
  levelIndex: number,
  moduleIndex: number,
  levels: CourseLevel[],
  completedModules: string[],
  isTestModeEnabled: boolean
): boolean {
  if (isTestModeEnabled) return false;
  if (levelIndex === 0 && moduleIndex === 0) return false;
  
  // Get all previous modules
  const allPreviousModules: CourseModule[] = [];
  for (let i = 0; i <= levelIndex; i++) {
    const level = levels[i];
    const modulesToAdd = i === levelIndex 
      ? level.modules.slice(0, moduleIndex) 
      : level.modules;
    allPreviousModules.push(...modulesToAdd);
  }
  
  // Check if all previous modules are completed
  return allPreviousModules.some(m => !completedModules.includes(m.id));
}

export default SnakePath;
