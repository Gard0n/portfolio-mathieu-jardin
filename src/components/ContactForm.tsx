"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { siteContent } from "@/content/siteContent";

// Remplace YOUR_FORM_ID par ton ID Formspree (formspree.io → New Form → copie l'ID)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojpqzyj";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const isValid =
    values.name.trim().length > 1 &&
    emailRegex.test(values.email) &&
    values.message.trim().length > 4;

  function validate(): Partial<FormState> {
    const e: Partial<FormState> = {};
    if (values.name.trim().length < 2) e.name = "Ton nom est requis.";
    if (!emailRegex.test(values.email)) e.email = "Email invalide.";
    if (values.message.trim().length < 5) e.message = "Message trop court.";
    return e;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values)
      });
      if (res.ok) {
        setStatus("success");
        setValues(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(siteContent.site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/10 p-6 text-center">
        <p className="font-medium text-success">Message envoyé !</p>
        <p className="mt-1 text-sm text-muted">Je te réponds sous 24h.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs text-muted underline hover:text-text"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden />

      <div>
        <label className="text-sm font-medium" htmlFor="name">Nom</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
          className="mt-2 w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text placeholder:text-muted [color-scheme:dark] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Ton prénom ou nom d'entreprise"
          required
        />
        {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
          className="mt-2 w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text placeholder:text-muted [color-scheme:dark] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="ton@email.com"
          required
        />
        {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((p) => ({ ...p, message: e.target.value }))}
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text placeholder:text-muted [color-scheme:dark] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Décris ton projet ou ta question..."
          required
        />
        {errors.message && <p className="mt-1 text-xs text-danger">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={!isValid || status === "sending"}>
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </Button>
        <Button type="button" variant="secondary" onClick={handleCopyEmail}>
          {copied ? "Email copié ✓" : "Copier email"}
        </Button>
        <span className="text-xs text-muted">{siteContent.site.email}</span>
      </div>

      {status === "error" && (
        <p className="text-sm text-danger">
          Erreur d&apos;envoi. Contacte-moi directement à{" "}
          <a href={`mailto:${siteContent.site.email}`} className="underline">
            {siteContent.site.email}
          </a>
        </p>
      )}
    </form>
  );
}
