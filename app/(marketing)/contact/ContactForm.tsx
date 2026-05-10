"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { ChevronDown, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

// ─── Native select styled to match shadcn Input ───────────────────────────────

function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-10 w-full min-w-0 cursor-pointer appearance-none rounded-lg border border-input",
          "bg-transparent",
          "px-2.5 pr-8 py-1 text-sm transition-colors outline-none",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-ink-500"
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-900">
        {label}
        <span className="ml-0.5 text-red-500" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Form ─────────────────────────────────────────────────────────────────────

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EMPTY: FormValues = { name: "", email: "", phone: "", service: "", message: "" };

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (!v.name.trim() || v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!v.email.trim() || !v.email.includes("@")) e.email = "Please enter a valid email address.";
  if (!v.phone.trim() || v.phone.replace(/\D/g, "").length < 10)
    e.phone = "Please enter a valid 10-digit phone number.";
  if (!v.message.trim() || v.message.trim().length < 10)
    e.message = "Please describe what you need (at least 10 characters).";
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data: { success?: boolean; error?: string } = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.error ?? "Something went wrong. Please try WhatsApp instead.");
      } else {
        setSubmitted(true);
        setValues(EMPTY);
        toast.success("Message sent! We'll reply within 30 minutes.");
      }
    } catch {
      toast.error("Network error. Please try WhatsApp or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-brand-50 border border-brand-100 p-8">
        <div className="flex size-10 items-center justify-center rounded-full bg-brand-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="size-5" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-display text-lg font-semibold text-ink-900">Message received!</h3>
        <p className="text-sm leading-relaxed text-ink-600">
          We typically reply within 30 minutes on WhatsApp and within a few hours by email.
          You&apos;ll hear from us at <strong>{values.email || "your email"}</strong>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" id="name" error={errors.name}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Rahul Sharma"
            autoComplete="name"
            className="h-10"
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field label="Email" id="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="rahul@example.com"
            autoComplete="email"
            className="h-10"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" id="phone" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className="h-10"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field label="Service needed" id="service">
          <Select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
          >
            <option value="">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" id="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          placeholder="Brief description of what you need help with…"
          rows={5}
          className="resize-none"
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs text-ink-400">
        Or reach us instantly on{" "}
        <a
          href="https://wa.me/918178363761?text=Hi%2C%20I%27d%20like%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
        >
          WhatsApp
        </a>
        . First consultation is free.
      </p>
    </form>
  );
}
