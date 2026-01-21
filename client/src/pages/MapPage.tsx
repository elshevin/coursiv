import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Lock, Star, ChevronLeft, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

// 关卡配置数据
const LEVELS_CONFIG = [
  {
    id: "chatgpt-basics",
    title: "ChatGPT 初体验",
    desc: "学习如何与 AI 进行第一次对话",
    icon: "🤖",
    hasContent: true // 标记是否有实际内容
  },
  {
    id: "prompt-engineering",
    title: "提示词工程入门",
    desc: "掌握让 AI 更听话的秘诀",
    icon: "✨",
    hasContent: false
  },
  {
    id: "midjourney-art",
    title: "AI 绘画初探",
    desc: "用文字创造惊艳的图像",
    icon: "🎨",
    hasContent: false
  },
  {
    id: "manus-automation",
    title: "Manus 自动化",
    desc: "让 AI 帮你自动完成工作",
    icon: "⚡",
    hasContent: false
  }
];

// 进度管理工具函数
const PROGRESS_KEY = "ai_learning_progress";

interface LevelProgress {
  completedLevels: string[];
  unlockedLevels: string[];
}

function getProgress(): LevelProgress {
  if (typeof window === "undefined") {
    return { completedLevels: [], unlockedLevels: [LEVELS_CONFIG[0].id] };
  }
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load progress:", e);
  }
  // 默认解锁第一关
  return { completedLevels: [], unlockedLevels: [LEVELS_CONFIG[0].id] };
}

function saveProgress(progress: LevelProgress) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

export default function MapPage() {
  const [progress, setProgress] = useState<LevelProgress>(() => getProgress());

  // 监听 storage 事件，支持跨标签页同步
  useEffect(() => {
    const handleStorageChange = () => {
      setProgress(getProgress());
    };
    window.addEventListener("storage", handleStorageChange);
    // 页面加载时也刷新一次
    setProgress(getProgress());
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // 计算进度百分比
  const completedCount = progress.completedLevels.length;
  const totalCount = LEVELS_CONFIG.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  // 为每个关卡计算状态
  const levelsWithStatus = LEVELS_CONFIG.map((level, index) => {
    const isCompleted = progress.completedLevels.includes(level.id);
    const isUnlocked = progress.unlockedLevels.includes(level.id);
    
    return {
      ...level,
      status: isCompleted ? "completed" : isUnlocked ? "unlocked" : "locked",
      stars: isCompleted ? 3 : 0
    };
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 p-4">
        <div className="container max-w-md mx-auto flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold">学习路径</h1>
          <div className="w-10" /> {/* 占位符保持居中 */}
        </div>
      </header>

      {/* 关卡列表 */}
      <main className="flex-1 container max-w-md mx-auto p-6 space-y-6">
        <div className="text-center mb-8">
          {/* 进度条 */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">学习进度</span>
              <span className="font-semibold text-primary">{progressPercent}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-2">
            <Trophy className="w-4 h-4" />
            已完成 {completedCount} / {totalCount} 关
          </div>
          <h2 className="text-2xl font-bold">AI 全能助手之路</h2>
          <p className="text-muted-foreground">从零开始，成为 AI 驾驭者</p>
        </div>

        <div className="space-y-4 relative">
          {/* 连接线 (视觉装饰) */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-border/50 -z-10 rounded-full" />

          {levelsWithStatus.map((level, index) => (
            <LevelCard key={level.id} level={level} index={index} />
          ))}
        </div>

        {/* 重置进度按钮 (仅用于测试) */}
        {completedCount > 0 && (
          <div className="pt-8 text-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground"
              onClick={() => {
                const newProgress = { completedLevels: [], unlockedLevels: [LEVELS_CONFIG[0].id] };
                saveProgress(newProgress);
                setProgress(newProgress);
              }}
            >
              重置学习进度
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

function LevelCard({ level, index }: { level: any; index: number }) {
  const isLocked = level.status === "locked";
  const isCompleted = level.status === "completed";
  const hasContent = level.hasContent;
  
  return (
    <div className={cn(
      "relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300",
      isLocked 
        ? "bg-muted/50 border-transparent opacity-70" 
        : "bg-card border-border/50 shadow-sm hover:shadow-md hover:border-primary/50 hover:-translate-y-1 cursor-pointer"
    )}>
      {/* 序号/图标 */}
      <div className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-inner shrink-0",
        isCompleted 
          ? "bg-green-100 dark:bg-green-900/30 text-green-600" 
          : isLocked 
            ? "bg-muted text-muted-foreground" 
            : "bg-primary/10 text-primary"
      )}>
        {isCompleted ? <Check className="w-8 h-8" /> : level.icon}
      </div>

      {/* 内容 */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg truncate">{level.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{level.desc}</p>
        {isCompleted && (
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        )}
        {!hasContent && !isLocked && (
          <span className="text-xs text-amber-500 mt-1 inline-block">即将上线</span>
        )}
      </div>

      {/* 状态图标/按钮 */}
      <div className="shrink-0">
        {isLocked ? (
          <Lock className="w-5 h-5 text-muted-foreground" />
        ) : hasContent ? (
          <Link href={`/ai-learn/${level.id}`}>
            <Button size="sm" className="rounded-full px-4">
              {isCompleted ? "复习" : "开始"}
            </Button>
          </Link>
        ) : (
          <Button size="sm" variant="outline" className="rounded-full px-4" disabled>
            敬请期待
          </Button>
        )}
      </div>
    </div>
  );
}

// 导出工具函数供其他组件使用
export { getProgress, saveProgress, LEVELS_CONFIG, PROGRESS_KEY };
export type { LevelProgress };
