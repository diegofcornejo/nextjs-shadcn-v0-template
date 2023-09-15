"use client";
import AuthProvider from "../providers/auth-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
				{children}
    </AuthProvider>
  );
}