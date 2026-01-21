import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Lock, Star, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// 模拟关卡数据
const LEVELS = [
  {
    id: "chatgpt-basics",
    title: "ChatGPT 初体验",
    desc: "学习如何与 AI 进行第一次对话",
    status: "unlocked", // unlocked, locked, completed
    stars: 0,
    icon: "🤖"
  },
  {
    id: "prompt-engineering",
    title: "提示词工程入门",
    desc: "掌握让 AI 更听话的秘诀",
    status: "locked",
    stars: 0,
    icon: "✨"
  },
  {
    id: "midjourney-art",
    title: "AI 绘画初探",
    desc: "用文字创造惊艳的图像",
    status: "locked",
    stars: 0,
    icon: "🎨"
  },
  {
    id: "manus-automation",
    title: "Manus 自动化",
    desc: "让 AI 帮你自动完成工作",
    status: "locked",
    stars: 0,
    icon: "⚡"
  }
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 p-4">
        <div className="container max-w-md mx-auto flex items-center justify-between">
          <Link href="/">
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
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-2">
            当前进度: 0%
          </div>
          <h2 className="text-2xl font-bold">AI 全能助手之路</h2>
          <p className="text-muted-foreground">从零开始，成为 AI 驾驭者</p>
        </div>

        <div className="space-y-4 relative">
          {/* 连接线 (视觉装饰) */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-border/50 -z-10 rounded-full" />

          {LEVELS.map((level, index) => (
            <LevelCard key={level.id} level={level} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

function LevelCard({ level, index }: { level: any; index: number }) {
  const isLocked = level.status === "locked";
  const isCompleted = level.status === "completed";
  
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
        isLocked ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
      )}>
        {isCompleted ? <Check className="w-8 h-8" /> : level.icon}
      </div>

      {/* 内容 */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg truncate">{level.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{level.desc}</p>
      </div>

      {/* 状态图标 */}
      <div className="shrink-0">
        {isLocked ? (
          <Lock className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Link href={`/ai-learn/${level.id}`}>
            <Button size="sm" className="rounded-full px-4">
              {isCompleted ? "复习" : "开始"}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
