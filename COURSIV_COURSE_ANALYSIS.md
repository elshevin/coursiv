# Coursiv 原站课程体验深度分析

**分析时间**：2026-01-12 07:02 GMT+8  
**目的**：深入分析 Coursiv 原站课程体验，记录所有内容元素和交互方式

---

## 1. 首页 Hero 区域

### 1.1 浏览器窗口演示动画
**观察**：
- 紫蓝色顶部栏（带红黄绿三个按钮和左右箭头）
- 白色内容区域显示 **真实的 AI 生成内容**
- 标题："Social Media Post for New Fitness App Launch"
- 图片：健身应用的宣传图
- 文字内容：AI 生成的社交媒体帖子文案
- 底部输入框：显示 "Generate a social media post for a new product launch"
- 发送按钮（紫蓝色箭头）

**当前实现差异**：
- ❌ 我们的实现只显示骨架屏加载动画
- ❌ 没有真实的 AI 生成内容演示
- ❌ 没有标题和图片

---

## 2. 课程列表页面（待分析）

---

## 3. 课程详情页面（待分析）

---

## 4. 课程内容阅读页面（待分析）

---

## 5. Quiz 页面（待分析）

---

## 6. 交互元素清单（待分析）

---

## 7. 差异对比表（待分析）

---

## 8. 改进建议（待分析）


---

## 更新日期: 2026-01-13

---

## 2. 课程详情页 (Guide Pathway) - 已分析

### 页面结构
- **顶部导航**: 返回按钮 + 课程名称下拉 + 进度百分比
- **蓝色横幅**: 显示 "AI MASTERY • LEVEL 1" + 课程标题
- **左侧**: 证书卡片 + 进度提示
- **右侧**: 蛇形路径布局，模块图标交替排列

### 模块预览弹窗
- 点击模块图标显示弹窗
- 弹窗内容: 模块标题 + 描述 + Read/Listen 按钮
- 样式: 白色背景，圆角，阴影

### 模块类型
1. **内容模块** (紫色书本图标): 阅读/听课内容
2. **练习模块** (紫色星星图标): Practice Newly Acquired Skills
3. **Quiz 模块**: Test Your Knowledge
4. **总结模块**: Recap

---

## 9. Playground 填空题分析 (从用户附件)

### 题目类型: "Painting the Scene"
- **标题**: "Painting the Scene"
- **说明**: "Fill in the missing parts of this AI art prompt to complete the scene"
- **AI 工具标签**: "Stable Diffusion" (带图标)

### 交互元素:
1. **Prompt 模板**: 
   - 固定文本 + 可填空位置
   - 示例: "A serene [place] at sunset, with cherry blossoms floating on a koi pond, painted in the style of Studio Ghibli."
   - 空白位置用紫色边框高亮显示

2. **选项按钮**:
   - 底部显示可选答案 (如 "Japanese garden")
   - 点击选项填入空白处

3. **Check 按钮**:
   - 验证答案是否正确
   - 灰色禁用状态，选择后激活

4. **删除按钮**:
   - 右侧有退格图标，可清除已选答案

### 正确答案反馈:
- 绿色横条分隔
- 绿色勾选图标 + "Amazing!"
- 说明文字: "You're right on track with your approach"
- AI 生成的图片展示 (Studio Ghibli 风格的日本花园)
- "Continue" 按钮

---

## 10. Playground 填空题的核心特点

1. **模板化 Prompt**: 预设的 AI prompt 模板，部分词汇留空
2. **选择式填空**: 不是自由输入，而是从预设选项中选择
3. **即时验证**: Check 按钮验证答案
4. **视觉反馈**: 正确答案展示 AI 生成的图片
5. **学习目标**: 教用户如何构建有效的 AI prompt

### 与普通选择题的区别:
- 选择题: 选择一个完整答案
- Playground: 填空完成一个 prompt，然后看 AI 生成结果



---

## 11. Coursiv 课程结构分析 (Lovable 课程)

### 模块类型观察:
1. **内容模块** (紫色书本图标): 阅读/听课内容
   - Intro to Lovable
   - Starting Your First Project
   - Editing with Chat
   - Working with Design Imports (当前位置)
   - Using Lovable with Other Tools
   - Writing Website Copy
   - Publishing and Sharing

2. **总结模块** (奖杯图标): Real-World Applications & Tips

### 发现:
- Lovable 课程没有明显的 "Practice Newly Acquired Skills" 模块
- 需要查找其他课程来找到 Playground 填空题

### 下一步:
- 查找 Stable Diffusion 课程的 "Practice Newly Acquired Skills" 模块
- 或者查找其他有 Playground 题目的课程



---

## 12. Practice Newly Acquired Skills 模块详细分析

### 入口页面
- **标题**: "Let's Practice"
- **描述**: "If you liked practicing with image generation, then it's about time to apply the knowledge you've gained about prompt crafting and other intricacies of Stable Diffusion."
- **副描述**: "Get ready to dive deeper and refine your skills with hands-on exercises!"
- **插图**: 黄色圆形背景，手持铅笔绘画的插图
- **按钮**: "Continue" (紫色按钮)
- **顶部**: 进度条 + 返回按钮(X) + 音频开关



### Playground 入口卡片
- **标题**: "Create a Landscape Prompt"
- **描述**: "Complete the prompt to generate a detailed landscape image."
- **按钮**: "Open Playground" (紫色按钮)
- **卡片样式**: 白色背景，圆角边框，阴影效果



### Playground 填空界面（核心交互）

**页面结构：**
1. **顶部导航**: 返回按钮(<) + 进度条
2. **标题区**: "Create a Landscape Prompt"
3. **描述**: "Complete the prompt to generate a detailed landscape image."
4. **AI 工具标签**: "Stable Diffusion" (带图标)
5. **Prompt 模板区**:
   - 固定文本: "Generate a [description] landscape with [object] and light rain in the [style] style."
   - 空白占位符: [description], [object], [style] - 紫色边框高亮
6. **图片预览区**: 黄色虚线边框的占位区域（等待生成）
7. **选项区**: 底部灰色背景
   - 可选词汇按钮: "misty", "rolling hills", "impressionism"
   - "Check" 按钮（灰色，禁用状态）
   - 删除按钮（退格图标）

**交互逻辑：**
- 用户点击空白占位符选择要填入的位置
- 然后点击底部的词汇按钮填入
- 填满所有空白后，"Check" 按钮激活
- 点击 Check 验证答案



### 填空交互过程详解

**第一步：选择 "misty" 填入 [description]**
- 点击 "misty" 按钮
- "misty" 自动填入第一个空白 [description]
- Prompt 变为: "Generate a [misty] landscape with [object] and light rain in the [style] style."
- "misty" 从选项区消失
- 剩余选项: "rolling hills", "impressionism"

**UI 变化：**
- 已填入的词汇显示为紫色边框高亮
- 空白占位符仍显示为紫色边框
- 选项区只显示剩余未使用的词汇



**第二步：选择 "rolling hills" 填入 [object]**
**第三步：选择 "impressionism" 填入 [style]**

**所有空白填满后的状态：**
- Prompt 完整: "Generate a misty landscape with rolling hills and light rain in the impressionism style."
- 所有词汇都已填入，选项区为空
- "Check" 按钮变为紫色（激活状态）
- 图片预览区仍为黄色虚线占位



### 验证成功后的反馈界面（关键！）

**页面结构变化：**
1. **Prompt 区域**:
   - 黄色圆点图标 + 完整 Prompt 文本
   - "Generate a misty landscape with rolling hills and light rain in the impressionism style."
   - 不再显示空白占位符

2. **图片预览区**:
   - 显示 AI 生成的风景图片（印象派风格的山丘风景）
   - 左上角有 Stable Diffusion 图标
   - 图片有黄色虚线边框

3. **成功反馈区**:
   - 绿色分割线
   - 绿色勾选图标 + "Amazing!" 标题
   - 副文本: "You're right on track with your approach"
   - 右侧有反馈按钮（旗帜图标）

4. **底部按钮**:
   - "Continue" 绿色按钮（进入下一题）

**关键动效观察：**
- 点击 Check 后，图片区域从占位符变为实际图片（可能有加载动画）
- 成功反馈区从底部滑入
- 整体过渡平滑



### 任务完成后的过渡界面

**页面结构：**
1. **任务卡片**:
   - 绿色标签: "✓ Task completed"
   - 标题: "Create a Landscape Prompt"
   - 描述: "Complete the prompt to generate a detailed landscape image."
   - "Repeat task" 按钮（紫色边框，可重做）

2. **过渡文本**:
   - "Great job! Now, let's move on to something more complex. We'll add specific image settings to our prompt."

3. **底部按钮**:
   - "Continue" 紫色按钮（进入下一题）



### 第二题：Detailed Portrait with Settings

**任务卡片：**
- 标题: "Detailed Portrait with Settings"
- 描述: "Create a prompt for a portrait, including image generation settings."
- 按钮: "Open Playground"

**页面结构：**
- 显示已完成的第一题（带 "Task completed" 标签）
- 显示第二题的任务卡片
- 进度条更新



### 第二题填空界面（更复杂的 Prompt）

**Prompt 模板：**
"Create a portrait of a [subject], using [number of steps] of steps and a CFG Scale of [value]. Apply the [sampler type] sampler."

**空白占位符：**
- [subject] - 主题
- [number of steps] - 步数
- [value] - CFG Scale 值
- [sampler type] - 采样器类型

**选项：**
- "80 steps"
- "9"
- "Euler a"
- "scientist"

**特点：**
- 这题包含技术参数（steps, CFG Scale, sampler）
- 教用户如何设置 Stable Diffusion 的高级参数
- 4 个空白，4 个选项，一一对应



---

## 13. 课程路径页面结构分析

### 页面布局
- **左侧**: 证书预览卡片 + 进度信息
- **右侧**: 课程模块路径图（蜿蜒路径）

### 模块类型（通过图标区分）
1. **内容模块** (紫色书本图标): 阅读/听课内容
   - Introduction to Stable Diffusion
   - Inside Stable Diffusion
   - Prompt Crafting Basics
   - Exploring Stable Diffusion Settings 1/2
   
2. **练习模块** (紫色星星图标): Practice Newly Acquired Skills
   - Playground 填空练习

3. **总结模块** (奖杯图标): Current Takeaways
   - 课程总结和要点回顾

4. **Quiz 模块** (问号图标): Test Your Knowledge
   - 选择题测试

5. **Recap 模块** (奖杯图标): Stable Diffusion Recap
   - 最终总结

### 模块弹窗
- 点击模块显示弹窗
- 包含: 标题 + 描述 + Read/Listen 按钮



---

## 14. 课程内容页面类型分析

### 类型 1：标题 + 描述 + 插图页

**页面结构：**
- 顶部: 关闭按钮(X) + 进度条 + 音频开关
- 标题: "Turn Words into Images"
- 描述: "The art world just got an upgrade. Discover how to command an AI that transforms your wildest ideas into reality with the precision of a seasoned artist."
- 插图: 黄色圆形背景 + 抽象图形（思考泡泡、几何形状）
- 底部: "Continue" 紫色按钮

**用途：** 模块介绍页，引入新概念



### 类型 2：标题 + 描述 + 插图 + 详细文本页

**页面结构：**
- 顶部: 关闭按钮(X) + 进度条 + 音频开关
- 标题: "What You Will Learn in This Course?"
- 描述: "Ever thought about creating stunning visuals with just words? In this course, you'll master **Stable Diffusion**, an AI tool to turn your ideas into images with no design skills required."
- 插图: 蓝色背景 + 平板电脑 + 创意图形
- 详细文本: 
  - "As you move through the course, you'll gain a solid grasp of **prompt crafting, adjusting settings, and using advanced techniques**."
  - "You'll learn how to write prompts that translate your ideas into exactly what you envision. From choosing the right words to blending artistic styles, you'll unlock the secrets of precise image generation."
- 底部: "Continue" 紫色按钮

**特点：**
- 文本中有**加粗**关键词
- 多段落文本
- 进度条更新



### Test Your Knowledge 模块弹窗

**弹窗结构：**
- 图标: 紫色星星图标（与 Practice 不同）
- 标题: "Test Your Knowledge"
- 描述: "Apply new concepts in complex scenarios"
- 按钮: "Read" + "Listen"

**特点：**
- Quiz 模块使用星星图标
- 与 Practice 模块的描述不同



### Quiz 模块入口页面

**页面结构：**
- 标题: "Advanced Prompt Engineering Test"
- 描述 1: "You've learned about Subject, Medium, Style, Art-Sharing Website References, Resolution, Color, and Lighting."
- 描述 2: "Now, it's time to take your skills to the next level by testing your ability to apply these concepts in more complex scenarios. Let's see if you can master prompt creation!"
- 插图: 人物手持清单，周围有星星
- 底部: "Continue" 紫色按钮



### Quiz 模块中的 Playground 任务卡片

**页面结构：**
- 标题: "Create a Complex Prompt"
- 描述: "Combine all the elements into one cohesive prompt. Pay attention to how each keyword works together to create a visually compelling and technically accurate image."
- 任务卡片:
  - 标题: "Fill in the Missing Keywords"
  - 描述: "Complete the following prompt by adding the missing subject, medium, and style keywords."
  - 按钮: "Open Playground" 紫色按钮

**发现：Quiz 模块内部也包含 Playground 填空练习！**



### Quiz 中 Playground 填空界面详细结构

**页面结构：**
- 返回按钮 (<)
- 标题: "Fill in the Missing Keywords"
- 描述: "Complete the following prompt by adding the missing subject, medium, and style keywords."

**Prompt 模板区：**
- AI 工具标签: "Stable Diffusion" (带图标)
- Prompt 模板: "An [subject], exploring a [location], depicted in [style], using [medium]."
- 空白占位符: subject, location, style, medium (紫色边框)
- 图片预览区: 黄色虚线边框（等待填空完成）

**选项区：**
- 选项按钮: "surrealism", "digital painting", "astronaut", "futuristic city"
- Check 按钮（灰色，禁用状态）
- 退格按钮（删除最后填入的词汇）

**关键发现：**
1. 4 个空白，4 个选项，一一对应
2. 图片预览区使用黄色虚线边框
3. Check 按钮在所有空白填满前禁用
4. 有退格按钮支持撤销



---

## 15. Lovable 课程路径页面分析

### 模块类型（通过图标和颜色区分）

1. **已完成内容模块** (绿色背景 + 白色勾选): 
   - Intro to Lovable
   - Starting Your First Project
   - Editing with Chat

2. **视频模块** (蓝色背景 + 播放图标):
   - Working with Design Imports
   - "Use Figma design mockups for your website"

3. **未完成内容模块** (紫色背景 + 书本图标):
   - Using Lovable with Other Tools
   - Writing Website Copy
   - Publishing and Sharing

### 关键发现
- **视频模块**是新类型！蓝色背景 + 播放图标
- 已完成模块显示绿色背景 + 勾选
- 进度显示 37%



### Lovable 课程完整模块列表

1. Intro to Lovable (已完成 - 绿色)
2. Starting Your First Project (已完成 - 绿色)
3. Editing with Chat (已完成 - 绿色)
4. Working with Design Imports (视频模块 - 蓝色)
5. Using Lovable with Other Tools (内容模块 - 紫色)
6. Writing Website Copy (内容模块 - 紫色)
7. Publishing and Sharing (内容模块 - 紫色)
8. Real-World Applications & Tips (总结模块 - 奖杯图标)

**发现：Lovable 课程没有 Quiz 模块，只有内容模块、视频模块和总结模块**



---

## 16. 选择题类型 Quiz 界面分析（关键发现！）

### 页面结构

**上下文文本：**
- 标题: "Designers + AI?"
- 描述: "While designers create beautiful, user-focused interfaces, AI generates structure and functionality fast."
- 提示: "Keep it in mind before answering the next question."

**选择题卡片：**
- 问题: "In your opinion, what's the main advantage of importing designs into Lovable?"
- 选项（单选）:
  - A: "Imported designs never need any adjustments"
  - B: "It's faster than using text prompts"
  - C: "It's the only way to create websites in Lovable"
  - D: "You maintain professional design while getting functional code automatically"
- 按钮: "Hint" (紫色边框) + "Submit" (灰色，禁用状态)

### 关键 UI 元素
- 选项使用圆形单选按钮
- 选项卡片有边框
- Hint 按钮提供提示
- Submit 按钮在选择后激活



### 选择题选中状态

**选中后的变化：**
- 选中的选项显示紫色圆点（填充）
- 选中的选项卡片有紫色边框
- Submit 按钮从灰色变为紫色（激活状态）



### 选择题正确答案反馈界面

**页面变化：**
- 正确选项显示绿色勾选图标
- 其他选项保持灰色
- 反馈区域:
  - 绿色竖线分隔
  - 绿色勾选图标 + "Correct answer" 标题
  - 解释文本: "Exactly!"
- 底部按钮变为 "Continue" 紫色按钮

**关键 UI 元素：**
- 正确答案使用绿色勾选图标
- 反馈区域有绿色竖线装饰
- 解释文本简短明了

