import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database functions
vi.mock("./db", () => ({
  getDb: vi.fn().mockResolvedValue({}),
  createDemoUser: vi.fn().mockResolvedValue({
    id: 1,
    username: "demo_1234567890_abc123",
    createdAt: new Date(),
  }),
  getDemoUserById: vi.fn().mockResolvedValue({
    id: 1,
    username: "demo_1234567890_abc123",
    createdAt: new Date(),
  }),
}));

type CookieCall = {
  name: string;
  value?: string;
  options: Record<string, unknown>;
};

function createMockContext(demoUserId?: number): { ctx: TrpcContext; cookies: CookieCall[] } {
  const cookies: CookieCall[] = [];

  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
      cookies: demoUserId ? { demo_session: String(demoUserId) } : {},
    } as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string, options: Record<string, unknown>) => {
        cookies.push({ name, value, options });
      },
      clearCookie: (name: string, options: Record<string, unknown>) => {
        cookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, cookies };
}

describe("demo.login", () => {
  it("creates a new demo user and sets session cookie", async () => {
    const { ctx, cookies } = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.login();

    expect(result).toBeDefined();
    expect(result.username).toMatch(/^demo_\d+_[a-z0-9]+$/);
    expect(cookies.length).toBeGreaterThan(0);
  });
});

describe("demo.logout", () => {
  it("clears the demo session cookie", async () => {
    const { ctx, cookies } = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.logout();

    expect(result).toEqual({ success: true });
    expect(cookies.some(c => c.name === "demo_session")).toBe(true);
  });
});

describe("demo.me", () => {
  it("returns null when not logged in", async () => {
    const { ctx } = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.me();

    expect(result).toBeNull();
  });
});
