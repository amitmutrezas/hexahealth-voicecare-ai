import { useState, type FormEvent } from "react";
import { ChevronDown, Phone } from "lucide-react";

const INDIAN_PHONE = /^[6-9]\d{9}$/;

/**
 * Phone capture for the "Try an agent" experience.
 * Telephony/API integration can be wired into `requestAgentCall` later.
 */
async function requestAgentCall(phone: string): Promise<void> {
  // Placeholder: replace with a server function that triggers the outbound call.
  void phone;
}

export function PhoneAgentCTA() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "").slice(-10);
    if (!phone.trim()) {
      setSuccess(false);
      setError("Please enter your phone number");
      return;
    }
    if (!INDIAN_PHONE.test(digits)) {
      setSuccess(false);
      setError("Enter a valid 10-digit Indian mobile number");
      return;
    }
    setError(null);
    setPending(true);
    await requestAgentCall(digits);
    setPending(false);
    setSuccess(true);
  };

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-2 rounded-[2rem] border border-border bg-card p-2 shadow-pill sm:flex-row sm:items-center sm:rounded-full sm:pl-5"
        noValidate
      >
        <div className="flex min-w-0 flex-1 items-center gap-3 px-3 sm:px-0">
          <span className="flex shrink-0 items-center gap-1 text-muted-foreground">
            <span
              aria-hidden="true"
              className="flex size-5 flex-col overflow-hidden rounded-[3px] border border-border"
            >
              <span className="flex-1 bg-accent" />
              <span className="flex-1 bg-card" />
              <span className="flex-1 bg-[oklch(0.55_0.13_150)]" />
            </span>
            <span className="text-sm font-medium text-foreground">+91</span>
            <ChevronDown className="size-4" aria-hidden="true" />
            <span className="sr-only">India, +91</span>
          </span>
          <span className="hidden h-6 w-px shrink-0 bg-border sm:block" />
          <label htmlFor="hero-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Phone Number"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "hero-phone-error" : undefined}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError(null);
            }}
            className="h-12 w-full min-w-0 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
        >
          <Phone className="size-4" aria-hidden="true" />
          {pending ? "Connecting…" : "Try an agent"}
        </button>
      </form>

      <div aria-live="polite" className="mt-3 min-h-5 px-1 text-sm">
        {error && (
          <p id="hero-phone-error" className="text-destructive">
            {error}
          </p>
        )}
        {success && !error && (
          <p className="text-accent">
            Thanks! A VoiceCare AI agent will reach out shortly.
          </p>
        )}
        {!error && !success && (
          <p className="text-muted-foreground">
            Enter your number and experience VoiceCare AI firsthand.
          </p>
        )}
      </div>
    </div>
  );
}
