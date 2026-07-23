"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Role = "client" | "librarian";

type SessionUser = {
  name: string;
  role: Role;
} | null;

type AuthResult = { success: boolean; message?: string; user?: SessionUser };

type AuthContextValue = {
  user: SessionUser;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (name: string, email: string, password: string) => Promise<AuthResult>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((response) => response.json())
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  async function login(email: string, password: string): Promise<AuthResult> {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.success) {
      setUser(data.user);
    }

    return data;
  }

  async function register(name: string, email: string, password: string): Promise<AuthResult> {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();

    if (data.success) {
      setUser(data.user);
    }

    return data;
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
