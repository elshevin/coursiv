# Coursiv AI Tools 功能分析

## 界面元素

### 标题
- "What can I help with?"

### 输入区域
- 文本输入框: "Ask anything"
- 图片上传按钮 (左下角)
- 模型选择下拉 (右下角): 默认 "ChatGPT-5-mini"
- 发送按钮

### 可选模型列表
1. ChatGPT-5-mini (默认)
2. Stable Diffusion
3. Gemini
4. Claude
5. Dall-e-3
6. Perplexity
7. Grok
8. ChatGPT-4o-mini
9. Flux (COMING SOON)

### 快捷操作按钮 (6个)
1. Create an image
2. Give advice
3. Generate ideas
4. Summarize text
5. Analyze this data
6. Translate this

### 导航栏元素
- "4" 积分显示 (带 Get PRO 按钮)
- 历史记录按钮 (时钟图标)

## 功能分析

### 真实 AI 对话
- 原版是真实接入多个 AI 模型
- 用户发送消息后获得真实 AI 回复
- 每次对话消耗积分

### 积分系统
- 显示当前积分数量
- Get PRO 按钮引导付费
- 积分用完后需要购买

### 图片功能
- 可以上传图片进行分析
- 可以使用 Stable Diffusion / Dall-e-3 生成图片

## 原版真实功能发现

### 对话界面
- 发送消息后进入对话页面 `/ai-tools/conversations/{id}`
- 显示 "New conversation" 标题
- 用户消息显示在右侧（灰色背景）
- AI 回复显示在左侧（带 ChatGPT 图标）
- AI 回复支持 Markdown 格式（列表、粗体等）
- 回复下方有复制按钮和重新生成按钮

### 积分系统
- 发送消息前积分: 4
- 发送消息后积分: 3
- 每次对话扣减 1 积分
- 积分不足时显示 "Get PRO" 按钮

### 历史记录
- 左上角返回按钮
- 可以查看历史对话

## 我们的模拟方案

由于没有真实 AI API，我们将：
1. 模拟 AI 回复（预设回复模板，支持 Markdown 格式）
2. 模拟积分系统（显示数字，每次对话 -1）
3. 图片上传显示 "Coming Soon"
4. 模型选择仅切换显示，不影响回复
5. 对话历史保存到 localStorage
6. 复制按钮和重新生成按钮功能实现
