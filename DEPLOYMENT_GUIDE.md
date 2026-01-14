# AI Master 一键部署指南

本文档提供在 Manus 沙盒环境中一键部署 AI Master 课程平台的完整步骤。

## 目录

1. [前置条件](#前置条件)
2. [环境变量配置](#环境变量配置)
3. [一键部署步骤](#一键部署步骤)
4. [验证部署](#验证部署)
5. [常见问题](#常见问题)

---

## 前置条件

### 必需条件

- Manus 账号（具有沙盒访问权限）
- GitHub 账号（用于克隆代码仓库）

### 可选条件

- 自定义域名（用于生产环境）
- Stripe 账号（用于支付功能）

---

## 环境变量配置

### 自动注入的环境变量（无需手动配置）

以下环境变量由 Manus 平台自动注入，**无需手动配置**：

| 变量名 | 说明 |
|--------|------|
| `BUILT_IN_FORGE_API_KEY` | Manus Forge API 密钥 |
| `BUILT_IN_FORGE_API_URL` | Manus Forge API URL |
| `JWT_SECRET` | JWT 签名密钥 |
| `OAUTH_SERVER_URL` | OAuth 服务器 URL |
| `OWNER_NAME` | 项目所有者名称 |
| `OWNER_OPEN_ID` | 项目所有者 OpenID |
| `VITE_ALLOW_TEST_MODE` | 是否允许测试模式 |
| `VITE_ANALYTICS_ENDPOINT` | 分析端点 |
| `VITE_ANALYTICS_WEBSITE_ID` | 分析网站 ID |
| `VITE_APP_ID` | 应用 ID |
| `VITE_APP_LOGO` | 应用 Logo URL |
| `VITE_APP_TITLE` | 应用标题 |
| `VITE_FRONTEND_FORGE_API_KEY` | 前端 Forge API 密钥 |
| `VITE_FRONTEND_FORGE_API_URL` | 前端 Forge API URL |
| `VITE_OAUTH_PORTAL_URL` | OAuth 门户 URL |

### 需要手动配置的环境变量（可选）

如果需要启用支付功能，需要配置以下 Stripe 环境变量：

| 变量名 | 说明 | 如何获取 |
|--------|------|----------|
| `STRIPE_SECRET_KEY` | Stripe 密钥 | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `STRIPE_PUBLISHABLE_KEY` | Stripe 公钥 | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `STRIPE_WEBHOOK_SECRET` | Stripe Webhook 密钥 | 创建 Webhook 后获取 |

---

## 一键部署步骤

### 步骤 1：克隆代码仓库

```bash
gh repo clone ZHouliRic/aimaster
cd aimaster
```

### 步骤 2：安装依赖

```bash
pnpm install
```

### 步骤 3：初始化数据库

```bash
pnpm db:push
```

### 步骤 4：启动开发服务器

```bash
pnpm dev
```

### 步骤 5：访问应用

开发服务器启动后，访问 `http://localhost:3000` 查看应用。

---

## 在 Manus 中部署

### 方式 1：使用 Manus Web 项目功能（推荐）

1. 在 Manus 中创建新任务
2. 告诉 Manus："从 GitHub 仓库 ZHouliRic/aimaster 克隆并部署项目"
3. Manus 将自动：
   - 克隆代码
   - 安装依赖
   - 配置环境变量
   - 启动开发服务器
   - 提供预览链接

### 方式 2：手动部署

在 Manus 沙盒中执行以下命令：

```bash
# 1. 克隆仓库
cd /home/ubuntu
gh repo clone ZHouliRic/aimaster coursiv-landing

# 2. 进入项目目录
cd coursiv-landing

# 3. 安装依赖
pnpm install

# 4. 初始化数据库
pnpm db:push

# 5. 启动开发服务器
pnpm dev
```

---

## 验证部署

### 功能检查清单

部署完成后，验证以下功能是否正常：

| 功能 | 测试路径 | 预期结果 |
|------|----------|----------|
| 首页 | `/` | 显示 Landing Page |
| Quiz 流程 | `/quiz` | 显示问卷第一步 |
| 登录 | `/login` | 显示登录表单 |
| 课程列表 | `/dashboard` | 显示课程卡片（需登录） |
| 课程内容 | `/lesson/chatgpt/chatgpt-1-1` | 显示课程内容 + Playground |
| 付款页面 | `/upsell` | 显示价格和倒计时 |

### 快速验证命令

```bash
# 检查服务器状态
curl -I http://localhost:3000

# 检查 API 健康
curl http://localhost:3000/api/health
```

---

## 项目结构

```
aimaster/
├── client/                 # 前端代码
│   ├── src/
│   │   ├── components/     # React 组件
│   │   ├── pages/          # 页面组件
│   │   ├── hooks/          # 自定义 Hooks
│   │   └── contexts/       # React Context
├── server/                 # 后端代码
│   ├── routers.ts          # tRPC 路由
│   └── db.ts               # 数据库操作
├── shared/                 # 共享代码
│   ├── courseData.ts       # 课程元数据
│   ├── allCourseData.ts    # 完整课程内容数据
│   └── courseContentTypes.ts # 课程内容类型定义
├── drizzle/                # 数据库 Schema
└── docs/                   # 文档
    └── COURSE_DATA_GENERATION_GUIDE.md  # 课程数据生成指南
```

---

## 相关文档

- [课程数据生成指南](./COURSE_DATA_GENERATION_GUIDE.md) - 如何生成 Coursiv 风格的课程数据
- [E2E 测试报告](./E2E_TEST_PHASE39.md) - 最新的 E2E 测试结果

---

## 常见问题

### Q: 数据库连接失败怎么办？

A: 确保 Manus 平台已自动注入数据库相关环境变量。如果问题持续，尝试重启开发服务器：

```bash
pnpm dev
```

### Q: 如何添加新课程？

A: 参考 [课程数据生成指南](./COURSE_DATA_GENERATION_GUIDE.md)，在 `shared/allCourseData.ts` 中添加新课程数据。

### Q: 如何启用支付功能？

A: 
1. 在 Manus 项目设置中添加 Stripe 环境变量
2. 运行 `webdev_add_feature` 添加 Stripe 集成
3. 配置 Stripe Webhook

### Q: 如何发布到生产环境？

A: 
1. 在 Manus 中创建 Checkpoint
2. 点击 Management UI 中的 "Publish" 按钮
3. 配置自定义域名（可选）

---

## 技术支持

如有问题，请联系项目维护者或在 GitHub 仓库中提交 Issue。
