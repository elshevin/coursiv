import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, demoUsers, InsertDemoUser, DemoUser } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Demo user functions for testing
export async function createDemoUser(): Promise<DemoUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create demo user: database not available");
    return null;
  }

  try {
    // Generate unique username with timestamp and random suffix
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 6);
    const username = `demo_${timestamp}_${randomSuffix}`;
    const displayName = `Demo User ${randomSuffix.toUpperCase()}`;
    
    const values: InsertDemoUser = {
      username,
      displayName,
      avatarUrl: null,
    };

    await db.insert(demoUsers).values(values);
    
    // Fetch the created user
    const result = await db.select().from(demoUsers).where(eq(demoUsers.username, username)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create demo user:", error);
    throw error;
  }
}

export async function getDemoUserById(id: number): Promise<DemoUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get demo user: database not available");
    return null;
  }

  const result = await db.select().from(demoUsers).where(eq(demoUsers.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateDemoUserLastLogin(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update demo user: database not available");
    return;
  }

  await db.update(demoUsers).set({ lastLoginAt: new Date() }).where(eq(demoUsers.id, id));
}
