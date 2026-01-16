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
      
      // Determine if this connection should be green (completed to completed/current)
      const prevItem = modulesWithPosition[i - 1];
      const currItem = modulesWithPosition[i];
      const isGreenConnection = prevItem?.status === "completed" && 
        (currItem?.status === "completed" || currItem?.status === "current");
      
      // Create curved path
      const midY = (prev.y + curr.y) / 2;
      const controlX1 = prev.x;
      const controlX2 = curr.x;
      
      path += ` C ${controlX1} ${midY}, ${controlX2} ${midY}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  // Generate separate paths for green and gray connections
  const generateColoredPaths = () => {
    if (nodePositions.length < 2) return { greenPath: "", grayPath: "" };
    
    let greenPath = "";
    let grayPath = "";
    
    for (let i = 1; i < nodePositions.length; i++) {
      const prev = nodePositions[i - 1];
      const curr = nodePositions[i];
      
      const prevItem = modulesWithPosition[i - 1];
      const currItem = modulesWithPosition[i];
      const isGreenConnection = prevItem?.status === "completed" && 
        (currItem?.status === "completed" || currItem?.status === "current");
      
      const midY = (prev.y + curr.y) / 2;
      const controlX1 = prev.x;
      const controlX2 = curr.x;
      
      const segment = `M ${prev.x} ${prev.y} C ${controlX1} ${midY}, ${controlX2} ${midY}, ${curr.x} ${curr.y}`;
      
      if (isGreenConnection) {
        greenPath += segment + " ";
      } else {
        grayPath += segment + " ";
      }
    }
    
    return { greenPath, grayPath };
  };

  const { greenPath, grayPath } = generateColoredPaths();

  return (
    <div ref={containerRef} className="relative py-8 px-4" data-testid="snake-path-container">
      {/* SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Gray connections */}
        <path
          d={grayPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
          className="connection-line"
        />
        {/* Green connections (completed) */}
        <path
          d={greenPath}
          fill="none"
          stroke="#22C55E"
          strokeWidth="3"
          className="connection-line"
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
                return <div key={colIndex} className="h-24" />;
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
  
  // Determine alignment based on column
  const alignClass = col === 0 ? "justify-start" : col === 2 ? "justify-end" : "justify-center";

  // Render different card styles based on status
  const renderCard = () => {
    switch (status) {
      case "completed":
        return (
          <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      
      case "current":
        return (
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center shadow-lg shadow-purple-200 border-4 border-white">
            <span className="text-white font-bold text-sm mb-1">Start</span>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        );
      
      case "available":
        return (
          <div className="w-16 h-16 rounded-xl bg-purple-100 border-2 border-purple-200 flex items-center justify-center shadow-md hover:shadow-lg hover:border-purple-300 transition-all">
            <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        );
      
      case "locked":
      default:
        return (
          <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center shadow-sm">
            <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        );
    }
  };

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
          ${status !== "locked" && status !== "current" ? "hover:scale-105 transition-transform" : ""}
        `}
      >
        {/* Module Card */}
        {renderCard()}
        
        {/* Module Title */}
        <div className={`
          mt-3 text-center max-w-[100px]
          ${status === "locked" ? "opacity-50" : ""}
        `}>
          <p className={`text-xs font-medium truncate ${status === "completed" ? "text-green-700" : status === "current" ? "text-purple-700" : "text-gray-700"}`}>
            {module.title}
          </p>
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
  
  // If no current module is set, the first unlocked module is current
  if (!currentModuleId && !isLocked) {
    // Check if this is the first unlocked module
    let foundFirstUnlocked = false;
    for (let i = 0; i <= levelIndex; i++) {
      const level = levels[i];
      const modulesToCheck = i === levelIndex 
        ? level.modules.slice(0, moduleIndex + 1) 
        : level.modules;
      
      for (const m of modulesToCheck) {
        if (!completedModules.includes(m.id)) {
          if (m.id === module.id) {
            foundFirstUnlocked = true;
          }
          break;
        }
      }
      if (foundFirstUnlocked) break;
    }
    
    if (foundFirstUnlocked) return "current";
  }
  
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
