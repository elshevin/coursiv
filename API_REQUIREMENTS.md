# Coursiv API Requirements Document

## Overview

This document outlines all API endpoints that are currently mocked and need to be implemented with real backend logic.

---

## 1. Authentication APIs

### 1.1 Demo Login (Currently Implemented - Mock)
- **Endpoint**: `POST /api/trpc/demo.login`
- **Current Behavior**: Creates a demo user with auto-generated username
- **Real Implementation Needed**:
  - OAuth integration (Google, Apple, Email)
  - Session management
  - Token refresh mechanism

### 1.2 Demo Logout (Currently Implemented)
- **Endpoint**: `POST /api/trpc/demo.logout`
- **Status**: ✅ Working

### 1.3 Get Current User (Currently Implemented)
- **Endpoint**: `GET /api/trpc/demo.me`
- **Status**: ✅ Working

---

## 2. Quiz/Onboarding APIs

### 2.1 Get Quiz Questions
- **Endpoint**: `GET /api/trpc/quiz.getQuestions`
- **Current Status**: Mock data in frontend
- **Required Response**:
```typescript
{
  questions: Array<{
    id: number;
    step: number;
    type: 'single' | 'multiple' | 'text' | 'slider';
    question: string;
    options?: Array<{
      id: string;
      text: string;
      icon?: string;
    }>;
    required: boolean;
  }>;
}
```

### 2.2 Submit Quiz Answer
- **Endpoint**: `POST /api/trpc/quiz.submitAnswer`
- **Input**:
```typescript
{
  questionId: number;
  answer: string | string[];
}
```
- **Required Logic**:
  - Store user answers
  - Calculate progress
  - Generate personalized recommendations

### 2.3 Get Quiz Results
- **Endpoint**: `GET /api/trpc/quiz.getResults`
- **Required Response**:
```typescript
{
  recommendedPath: string;
  courses: Array<{
    id: string;
    title: string;
    duration: string;
    level: string;
  }>;
  personalizedPlan: {
    dailyMinutes: number;
    estimatedCompletion: string;
  };
}
```

---

## 3. Course/Learning APIs

### 3.1 Get Learning Paths
- **Endpoint**: `GET /api/trpc/courses.getPaths`
- **Required Response**:
```typescript
{
  paths: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    courseCount: number;
    estimatedHours: number;
  }>;
}
```

### 3.2 Get Course Details
- **Endpoint**: `GET /api/trpc/courses.getById`
- **Input**: `{ courseId: string }`
- **Required Response**:
```typescript
{
  id: string;
  title: string;
  description: string;
  lessons: Array<{
    id: string;
    title: string;
    duration: number;
    completed: boolean;
  }>;
  progress: number;
}
```

### 3.3 Mark Lesson Complete
- **Endpoint**: `POST /api/trpc/courses.completeLesson`
- **Input**: `{ lessonId: string }`

---

## 4. Challenge APIs

### 4.1 Get 28-Day Challenge Status
- **Endpoint**: `GET /api/trpc/challenge.getStatus`
- **Required Response**:
```typescript
{
  currentDay: number;
  completedDays: number[];
  streak: number;
  todayTask: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };
}
```

### 4.2 Complete Daily Challenge
- **Endpoint**: `POST /api/trpc/challenge.completeDay`
- **Input**: `{ day: number }`

---

## 5. AI Assistant APIs (Generative Content)

### 5.1 Chat with AI Assistant
- **Endpoint**: `POST /api/trpc/ai.chat`
- **Input**:
```typescript
{
  message: string;
  context?: string;
}
```
- **Required Response**:
```typescript
{
  response: string;
  suggestions?: string[];
}
```
- **Implementation Notes**:
  - Integrate with LLM (OpenAI, Claude, etc.)
  - Context-aware responses based on user's learning progress
  - Rate limiting

### 5.2 Generate Learning Plan
- **Endpoint**: `POST /api/trpc/ai.generatePlan`
- **Input**: Quiz results
- **Required Response**: Personalized learning plan

---

## 6. Payment/Subscription APIs

### 6.1 Get Subscription Plans
- **Endpoint**: `GET /api/trpc/subscription.getPlans`
- **Required Response**:
```typescript
{
  plans: Array<{
    id: string;
    name: string;
    price: number;
    currency: string;
    interval: 'month' | 'year';
    features: string[];
  }>;
}
```

### 6.2 Create Checkout Session
- **Endpoint**: `POST /api/trpc/subscription.createCheckout`
- **Input**: `{ planId: string }`
- **Implementation Notes**:
  - Integrate with Stripe
  - Handle webhooks for payment confirmation

### 6.3 Get User Subscription
- **Endpoint**: `GET /api/trpc/subscription.getStatus`

---

## 7. User Profile APIs

### 7.1 Get User Profile
- **Endpoint**: `GET /api/trpc/user.getProfile`
- **Required Response**:
```typescript
{
  id: string;
  name: string;
  email: string;
  avatar?: string;
  subscription: {
    plan: string;
    expiresAt: Date;
  };
  stats: {
    coursesCompleted: number;
    minutesLearned: number;
    certificatesEarned: number;
    currentStreak: number;
  };
}
```

### 7.2 Update User Profile
- **Endpoint**: `POST /api/trpc/user.updateProfile`
- **Input**: `{ name?: string; avatar?: string }`

---

## 8. Certificate APIs

### 8.1 Get User Certificates
- **Endpoint**: `GET /api/trpc/certificates.list`
- **Required Response**:
```typescript
{
  certificates: Array<{
    id: string;
    courseId: string;
    courseName: string;
    issuedAt: Date;
    downloadUrl: string;
  }>;
}
```

### 8.2 Generate Certificate
- **Endpoint**: `POST /api/trpc/certificates.generate`
- **Input**: `{ courseId: string }`
- **Implementation Notes**:
  - PDF generation
  - Unique certificate ID
  - Verification URL

---

## Database Schema Requirements

### Tables Needed:
1. `users` - User accounts (✅ Exists)
2. `demo_users` - Demo login users (✅ Exists)
3. `quiz_responses` - User quiz answers
4. `user_progress` - Course progress tracking
5. `subscriptions` - Payment/subscription data
6. `certificates` - Issued certificates
7. `challenges` - 28-day challenge progress
8. `ai_conversations` - Chat history

---

## Priority Implementation Order

1. **High Priority** (Core Functionality):
   - Quiz APIs (2.1, 2.2, 2.3)
   - Course APIs (3.1, 3.2, 3.3)
   - User Profile (7.1, 7.2)

2. **Medium Priority** (Engagement):
   - Challenge APIs (4.1, 4.2)
   - AI Assistant (5.1, 5.2)
   - Certificates (8.1, 8.2)

3. **Lower Priority** (Monetization):
   - Payment APIs (6.1, 6.2, 6.3)

---

## Notes

- All endpoints use tRPC for type-safe API calls
- Authentication required for most endpoints (use `protectedProcedure`)
- Rate limiting should be implemented for AI endpoints
- Consider caching for frequently accessed data (courses, paths)
