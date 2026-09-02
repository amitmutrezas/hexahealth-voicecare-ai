import { useState, type FormEvent } from "react";
import { Phone, PartyPopper } from "lucide-react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number");

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(120),
});

export function PhoneAgentCTA() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onPhoneSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = phoneSchema.safeParse(phone.replace(/[\s-]/g, ""));
    if (!result.success) {
      setPhoneError(result.error.issues[0]?.message ?? "Enter a valid number");
      return;
    }
    setPhoneError("");
    setOpen(true);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
    });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setSubmitted(false);
      setErrors({});
    }
  };

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={onPhoneSubmit}
        className="flex flex-col gap-3 rounded-full border border-border bg-card p-2 shadow-pill sm:flex-row sm:items-center"
        noValidate
      >
        <div className="flex flex-1 items-center gap-2 px-3">
          <span className="flex h-4 w-6 shrink-0 flex-col overflow-hidden rounded-[2px] ring-1 ring-border" aria-hidden="true">
            <span className="h-1/3 bg-[#FF9933]" />
            <span className="h-1/3 bg-white" />
            <span className="h-1/3 bg-[#138808]" />
          </span>
          <span className="text-sm text-muted-foreground">+91</span>
          <Input
            id="agent-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            aria-label="Phone number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={14}
            className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <Phone className="size-4" aria-hidden="true" />
          Try an agent
        </button>
      </form>
      {phoneError && <p className="mt-2 px-4 text-xs text-destructive">{phoneError}</p>}

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          {submitted ? (
            <div className="py-6 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent-soft">
                <PartyPopper className="size-5 text-accent" aria-hidden="true" />
              </span>
              <DialogHeader className="mt-4">
                <DialogTitle className="text-center">You&apos;re all set</DialogTitle>
                <DialogDescription className="text-center">
                  An AI agent will call you on +91 {phone} shortly.
                </DialogDescription>
              </DialogHeader>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Try a VoiceCare AI agent</DialogTitle>
                <DialogDescription>
                  A few details and our AI agent will call you on +91 {phone}.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={onSubmit} className="mt-2 space-y-4" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="agent-name">Name</Label>
                  <Input id="agent-name" name="name" maxLength={100} autoComplete="name" />
                  {errors['name'] && <p className="text-xs text-destructive">{errors['name']}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agent-email">Email</Label>
                  <Input
                    id="agent-email"
                    name="email"
                    type="email"
                    maxLength={255}
                    autoComplete="email"
                  />
                  {errors['email'] && <p className="text-xs text-destructive">{errors['email']}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agent-company">Company</Label>
                  <Input
                    id="agent-company"
                    name="company"
                    maxLength={120}
                    autoComplete="organization"
                  />
                  {errors['company'] && <p className="text-xs text-destructive">{errors['company']}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Get a call from the AI agent
                </button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <p className="mt-3 px-1 text-sm text-muted-foreground">
        Enter your number and our AI agent will call you.
      </p>
    </div>
  );
}
