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
  row: number;
  col: number; // 0 = left, 1 = center, 2 = right
  direction: "left" | "right"; // direction of the row
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

  // Create snake pattern: 3 items per row, alternating direction
  const modulesWithPosition: ModuleWithPosition[] = [];
  let globalIndex = 0;
  
  levels.forEach((level, levelIndex) => {
    level.modules.forEach((module, moduleIndex) => {
      const status = getModuleStatus(module, levelIndex, moduleIndex, levels, completedModules, currentModuleId, isTestModeEnabled);
      
      // Calculate row and column for snake pattern
      const row = Math.floor(globalIndex / 3);
      const posInRow = globalIndex % 3;
      const direction: "left" | "right" = row % 2 === 0 ? "right" : "left";
      
      // For even rows: 0->left, 1->center, 2->right
      // For odd rows: 0->right, 1->center, 2->left (reversed)
      let col: number;
      if (direction === "right") {
        col = posInRow; // 0, 1, 2
      } else {
        col = 2 - posInRow; // 2, 1, 0
      }
      
      modulesWithPosition.push({
        module,
        levelIndex,
        moduleIndex,
        globalIndex,
        status,
        row,
        col,
        direction,
      });
      globalIndex++;
    });
  });

  // Group modules by row
  const rows: ModuleWithPosition[][] = [];
  modulesWithPosition.forEach((item) => {
    if (!rows[item.row]) {
      rows[item.row] = [];
    }
    rows[item.row].push(item);
  });

  // Sort each row by column
  rows.forEach((row) => {
    row.sort((a, b) => a.col - b.col);
  });

  // Calculate SVG path positions after render
  useEffect(() => {
    if (!containerRef.current) return;
    
    const nodes = containerRef.current.querySelectorAll('[data-module-node]');
    const positions: { x: number; y: number }[] = [];
    
    // Sort nodes by their data-index attribute
    const sortedNodes = Array.from(nodes).sort((a, b) => {
      const aIndex = parseInt(a.getAttribute('data-index') || '0');
      const bIndex = parseInt(b.getAttribute('data-index') || '0');
      return aIndex - bIndex;
    });
    
    sortedNodes.forEach((node) => {
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
      const controlX1 = prev.x;
      const controlX2 = curr.x;
      
      path += ` C ${controlX1} ${midY}, ${controlX2} ${midY}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  return (
    <div ref={containerRef} className="relative py-8 px-4" data-testid="snake-path-container">
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
          opacity="0.5"
        />
      </svg>

      {/* Module Rows */}
      <div className="relative z-10 space-y-8">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-3 gap-4 items-center"
            data-testid={`snake-row-${rowIndex}`}
          >
            {[0, 1, 2].map((colIndex) => {
              const item = row.find((m) => m.col === colIndex);
              if (!item) {
                return <div key={colIndex} className="h-20" />;
              }
              return (
                <ModuleNode
                  key={item.module.id}
                  item={item}
                  onModuleClick={onModuleClick}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ModuleNodeProps {
  item: ModuleWithPosition;
  onModuleClick: (module: CourseModule, status: ModuleStatus) => void;
}

function ModuleNode({ item, onModuleClick }: ModuleNodeProps) {
  const { module, status, globalIndex, col } = item;
  
  const statusColors = {
    completed: "bg-green-500 border-green-400 shadow-green-200",
    current: "bg-purple-500 border-purple-400 shadow-purple-200",
    available: "bg-white border-purple-300 shadow-purple-100",
    locked: "bg-gray-100 border-gray-300 shadow-gray-100",
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
    available: <span className="text-purple-600 font-bold text-lg">{globalIndex + 1}</span>,
    locked: (
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  };

  // Determine alignment based on column
  const alignClass = col === 0 ? "justify-start" : col === 2 ? "justify-end" : "justify-center";

  return (
    <div className={`flex ${alignClass}`}>
      <button
        data-module-node
        data-index={globalIndex}
        onClick={() => status !== "locked" && onModuleClick(module, status)}
        disabled={status === "locked"}
        className={`
          group relative flex flex-col items-center
          ${status !== "locked" ? "cursor-pointer" : "cursor-not-allowed"}
        `}
      >
        {/* Module Circle */}
        <div
          className={`
            w-14 h-14 rounded-full flex items-center justify-center
            border-4 shadow-lg transition-all duration-300
            ${statusColors[status]}
            ${status !== "locked" ? "group-hover:scale-110 group-hover:shadow-xl" : ""}
          `}
        >
          {statusIcons[status]}
        </div>
        
        {/* Module Title */}
        <div className={`
          mt-2 text-center max-w-[100px]
          ${status === "locked" ? "opacity-50" : ""}
        `}>
          <p className="text-xs font-medium text-gray-700 truncate">{module.title}</p>
          <p className="text-[10px] text-gray-500">{module.duration}</p>
          {module.type === "quiz" && (
            <span className="inline-block mt-1 px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] rounded-full">
              Quiz
            </span>
          )}
        </div>
      </button>
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
