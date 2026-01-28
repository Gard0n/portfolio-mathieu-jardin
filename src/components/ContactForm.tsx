"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { siteContent } from "@/content/siteContent";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const isValid = useMemo(() => {
    return (
      values.name.trim().length > 1 &&
      emailRegex.test(values.email) &&
      values.message.trim().length > 4
    );
  }, [values]);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): Errors {
    const nextErrors: Errors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = "Ton nom est requis.";
    }
    if (!emailRegex.test(values.email)) {
      nextErrors.email = "Email invalide.";
    }
    if (values.message.trim().length < 5) {
      nextErrors.message = "Message trop court.";
    }
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStatus("Message prêt. Tu peux me contacter directement par email.");
      setValues(initialState);
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="text-sm font-medium" htmlFor="name">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className="mt-2 w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-danger">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className="mt-2 w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-xs text-danger">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="mt-2 w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-danger">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={!isValid}>
          Envoyer
        </Button>
        <Button type="button" variant="secondary" onClick={handleCopyEmail}>
          {copied ? "Email copié" : "Copier email"}
        </Button>
        <span className="text-xs text-muted">{siteContent.site.email}</span>
      </div>

      {status ? (
        <p role="status" aria-live="polite" className="text-sm text-success">
          {status}
        </p>
      ) : null}
    </form>
  );
}
