import { useState, useEffect, useRef } from "react";
import { useRoute, Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Send, Sparkles, CheckCircle2, AlertCircle, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// 进度管理 - 与 MapPage 共享逻辑
const PROGRESS_KEY = "ai_learning_progress";
const LEVELS_ORDER = ["chatgpt-basics", "prompt-engineering", "midjourney-art", "manus-automation"];

interface LevelProgress {
  completedLevels: string[];
  unlockedLevels: string[];
}

function getProgress(): LevelProgress {
  if (typeof window === "undefined") {
    return { completedLevels: [], unlockedLevels: [LEVELS_ORDER[0]] };
  }
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load progress:", e);
  }
  return { completedLevels: [], unlockedLevels: [LEVELS_ORDER[0]] };
}

function saveProgress(progress: LevelProgress) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    // 触发 storage 事件以便其他标签页同步
    window.dispatchEvent(new Event("storage"));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

function completeLevel(levelId: string) {
  const progress = getProgress();
  
  // 标记当前关卡为已完成
  if (!progress.completedLevels.includes(levelId)) {
    progress.completedLevels.push(levelId);
  }
  
  // 解锁下一关
  const currentIndex = LEVELS_ORDER.indexOf(levelId);
  if (currentIndex >= 0 && currentIndex < LEVELS_ORDER.length - 1) {
    const nextLevelId = LEVELS_ORDER[currentIndex + 1];
    if (!progress.unlockedLevels.includes(nextLevelId)) {
      progress.unlockedLevels.push(nextLevelId);
    }
  }
  
  saveProgress(progress);
  return progress;
}

// 模拟关卡配置数据
const LEVEL_DATA = {
  "chatgpt-basics": {
    title: "ChatGPT 初体验",
    steps: [
      {
        id: 1,
        mentorText: "你好！我是你的 AI 导师。今天我们来学习如何使用 ChatGPT。首先，你需要找到输入框，这是我们和 AI 交流的窗口。",
        instruction: "请点击界面底部的【输入框】。",
        hotspot: { top: "85%", left: "10%", width: "80%", height: "60px" },
        simulatedAction: "focus_input"
      },
      {
        id: 2,
        mentorText: "太棒了！现在输入框已经激活。我们可以试着问它一个简单的问题，比如「帮我写一首关于春天的诗」。",
        instruction: "请点击输入框右侧的【发送按钮】（模拟输入完成）。",
        hotspot: { top: "86%", left: "85%", width: "40px", height: "40px" },
        simulatedAction: "send_message"
      },
      {
        id: 3,
        mentorText: "看！AI 马上就回复了。这就是生成式 AI 的魅力。现在，试着让它修改这首诗，让它变得更现代一点。",
        instruction: "点击【重新生成】按钮（模拟追问）。",
        hotspot: { bottom: "96px", left: "50%", width: "150px", height: "50px", transform: "translateX(-50%)" },
        simulatedAction: "regenerate"
      },
      {
        id: 4,
        mentorText: "恭喜你！你已经完成了第一次 AI 对话。记住，和 AI 交流就像和朋友聊天一样，多尝试不同的提问方式吧！",
        instruction: "点击【完成学习】返回地图。",
        hotspot: { top: "40%", left: "30%", width: "40%", height: "60px" },
        simulatedAction: "finish"
      }
    ]
  }
};

export default function LearningPage() {
  const [match, params] = useRoute("/ai-learn/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId || "chatgpt-basics";
  const levelConfig = LEVEL_DATA[levelId as keyof typeof LEVEL_DATA];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [simulatedState, setSimulatedState] = useState("initial"); // initial, focused, sent, regenerated
  const [showHotspotHint, setShowHotspotHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStep = levelConfig?.steps[currentStepIndex];
  const isLastStep = currentStepIndex === levelConfig?.steps.length - 1;

  // 自动滚动对话到底部
  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStepIndex]);

  const handleHotspotClick = () => {
    toast.success("操作正确！", { icon: <CheckCircle2 className="text-green-500" /> });
    setShowHotspotHint(false);
    
    // 更新模拟界面状态
    if (currentStep.simulatedAction === "focus_input") setSimulatedState("focused");
    if (currentStep.simulatedAction === "send_message") setSimulatedState("sent");
    if (currentStep.simulatedAction === "regenerate") setSimulatedState("regenerated");
    
    // 延迟进入下一步
    setTimeout(() => {
      if (isLastStep) {
        // 完成关卡：保存进度并显示完成界面
        completeLevel(levelId);
        setIsCompleted(true);
        toast.success("关卡完成！下一关已解锁！", { 
          icon: <PartyPopper className="text-yellow-500" />,
          duration: 3000
        });
      } else {
        setCurrentStepIndex(prev => prev + 1);
      }
    }, 1000);
  };

  const handleWrongClick = (e: React.MouseEvent) => {
    // 阻止冒泡，避免触发热区（如果重叠）
    e.stopPropagation();
    toast.error("哎呀，点错地方了。请根据左侧提示操作哦！", { icon: <AlertCircle className="text-red-500" /> });
    setShowHotspotHint(true);
  };

  const handleReturnToMap = () => {
    setLocation("/ai-map");
  };

  if (!levelConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="text-6xl">🚧</div>
          <h2 className="text-2xl font-bold">关卡建设中</h2>
          <p className="text-muted-foreground">这个关卡的内容正在紧张制作中，敬请期待！</p>
          <Link href="/ai-map">
            <Button className="rounded-full">返回地图</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      {/* 左侧：AI 导师对话区 */}
      <div className="w-full md:w-1/3 flex flex-col border-r border-border/50 bg-sidebar/50 backdrop-blur-sm z-10">
        <header className="p-4 border-b border-border/50 flex items-center gap-2">
          <Link href="/ai-map">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="font-bold text-lg">{levelConfig.title}</h1>
          <div className="ml-auto text-sm text-muted-foreground">
            {currentStepIndex + 1} / {levelConfig.steps.length}
          </div>
        </header>

        {/* 进度条 */}
        <div className="px-4 py-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((currentStepIndex + 1) / levelConfig.steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {levelConfig.steps.slice(0, currentStepIndex + 1).map((step, index) => (
            <div key={step.id} className={cn(
              "flex gap-3 animate-in slide-in-from-bottom-4 fade-in duration-500",
              index === currentStepIndex ? "opacity-100" : "opacity-60"
            )}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="bg-card p-4 rounded-2xl rounded-tl-none border border-border/50 shadow-sm">
                  <p className="text-sm leading-relaxed">{step.mentorText}</p>
                </div>
                {index === currentStepIndex && !isCompleted && (
                  <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 text-primary text-sm font-medium flex items-center gap-2 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    任务：{step.instruction}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* 右侧：模拟实操区 */}
      <div className="flex-1 relative bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 md:p-8" onClick={!isCompleted ? handleWrongClick : undefined}>
        {/* 模拟界面容器 */}
        <div className="relative w-full max-w-4xl aspect-video bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-border/50 transition-all duration-500">
          
          {/* 模拟 ChatGPT 界面头部 */}
          <div className="h-12 border-b flex items-center px-4 justify-between bg-white dark:bg-slate-800">
            <div className="font-semibold text-slate-700 dark:text-slate-200">New Chat</div>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* 模拟内容区 */}
          <div className="p-6 space-y-6 h-[calc(100%-140px)] overflow-y-auto">
            {/* 初始状态 */}
            {simulatedState === "initial" && (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                  <Sparkles className="w-8 h-8" />
                </div>
                <p>有什么可以帮你的吗？</p>
              </div>
            )}

            {/* 发送后状态 */}
            {(simulatedState === "sent" || simulatedState === "regenerated") && (
              <>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                    帮我写一首关于春天的诗
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0">AI</div>
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm leading-relaxed">
                    春风拂柳绿丝绦，<br/>
                    燕子归来筑旧巢。<br/>
                    细雨无声润万物，<br/>
                    百花争艳竞妖娆。
                  </div>
                </div>
              </>
            )}

            {/* 重新生成后状态 */}
            {simulatedState === "regenerated" && (
              <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0">AI</div>
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm leading-relaxed">
                  (现代版)<br/>
                  春天的闹钟响了，<br/>
                  叫醒了沉睡的种子。<br/>
                  风是温柔的快递员，<br/>
                  送来了花开的消息。
                </div>
              </div>
            )}
          </div>

          {/* 模拟输入区 */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-800 border-t">
            <div className={cn(
              "relative flex items-center border rounded-xl px-4 py-3 transition-all",
              simulatedState === "focused" ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200"
            )}>
              <span className={cn("text-slate-400", simulatedState === "sent" || simulatedState === "regenerated" ? "opacity-0" : "opacity-100")}>
                {simulatedState === "focused" ? "帮我写一首关于春天的诗" : "发送消息..."}
              </span>
              <div className="ml-auto p-1 bg-slate-100 rounded-md text-slate-400">
                <Send className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 重新生成按钮 (仅在特定步骤显示) */}
          {currentStep?.simulatedAction === "regenerate" && !isCompleted && (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-none">
              <Button variant="outline" className="shadow-lg bg-white dark:bg-slate-800 gap-2 pointer-events-none">
                <Sparkles className="w-4 h-4" /> 重新生成
              </Button>
            </div>
          )}

          {/* 完成学习弹窗 */}
          {isCompleted && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm animate-in fade-in z-30">
              <div className="bg-card p-8 rounded-3xl shadow-2xl text-center space-y-4 max-w-sm mx-4 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold">🎉 关卡完成！</h2>
                <p className="text-muted-foreground">你已经掌握了 ChatGPT 的基础对话技巧。下一关已解锁！</p>
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-full" 
                    onClick={() => {
                      setCurrentStepIndex(0);
                      setSimulatedState("initial");
                      setIsCompleted(false);
                    }}
                  >
                    再练一次
                  </Button>
                  <Button 
                    className="flex-1 rounded-full" 
                    onClick={handleReturnToMap}
                  >
                    返回地图
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* 热区层 (绝对定位覆盖) - 仅在未完成时显示 */}
          {!isCompleted && currentStep && (
            <div 
              className={cn(
                "absolute cursor-pointer transition-all duration-300 z-20",
                showHotspotHint ? "bg-blue-500/20 ring-4 ring-blue-500/50 animate-pulse" : "bg-transparent hover:bg-blue-500/10"
              )}
              style={{
                top: currentStep.hotspot.top,
                bottom: (currentStep.hotspot as any).bottom,
                left: currentStep.hotspot.left,
                width: currentStep.hotspot.width,
                height: currentStep.hotspot.height,
                transform: (currentStep.hotspot as any).transform,
              }}
              onClick={(e) => {
                e.stopPropagation(); // 阻止触发背景的错误点击
                handleHotspotClick();
              }}
            />
          )}
        </div>
        
        {/* 提示文字 */}
        {!isCompleted && (
          <div className="absolute bottom-4 text-slate-400 text-sm pointer-events-none">
            请在模拟界面中点击操作
          </div>
        )}
      </div>
    </div>
  );
}
