"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "scm-access";
const ACCESS_CODE = "prof2026"; // Change ici pour modifier le code d'accès

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem(STORAGE_KEY) === ACCESS_CODE) {
      setUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, ACCESS_CODE);
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 2000);
    }
  }

  if (!mounted) return null;

  if (unlocked) return <>{children}</>;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-surface/80 p-8 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Accès restreint</p>
        <h1 className="mt-3 text-2xl font-semibold">Portfolio SCM</h1>
        <p className="mt-2 text-sm text-muted">
          Ce contenu est réservé. Entre le code d&apos;accès pour continuer.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Code d'accès"
            className="w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text placeholder:text-muted [color-scheme:dark] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            autoFocus
          />
          {error && (
            <p className="text-xs text-danger">Code incorrect.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            Accéder
          </button>
        </form>
      </div>
    </div>
  );
}
