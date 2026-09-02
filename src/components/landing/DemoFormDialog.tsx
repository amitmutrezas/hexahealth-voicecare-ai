import { useState, type FormEvent, type ReactNode } from "react";
import { Check, ChevronDown, PartyPopper } from "lucide-react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const USE_CASES = [
  "Lead Qualification",
  "Follow-up Calls",
  "Appointment Booking",
  "Post Service / Support Calls",
  "Informational Calls",
  "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(120),
  useCases: z.array(z.string()).min(1, "Select at least one use case"),
  otherUseCase: z.string().trim().max(300).optional(),
});

export function DemoFormDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? "").replace(/\D/g, "").slice(-10),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      useCases: selected,
      otherUseCase: String(fd.get("otherUseCase") ?? ""),
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
      setSelected([]);
      setErrors({});
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {submitted ? (
          <div className="py-6 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent-soft">
              <PartyPopper className="size-5 text-accent" aria-hidden="true" />
            </span>
            <DialogHeader className="mt-4">
              <DialogTitle className="text-center">Thanks — request received</DialogTitle>
              <DialogDescription className="text-center">
                Our team will reach out shortly to schedule your VoiceCare AI demo.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book a VoiceCare AI demo</DialogTitle>
              <DialogDescription>
                Tell us a little about you and we&apos;ll set up a personalized walkthrough.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="mt-2 space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="lead-name">Name</Label>
                <Input id="lead-name" name="name" maxLength={100} autoComplete="name" />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Phone Number</Label>
                  <Input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-email">Email</Label>
                  <Input
                    id="lead-email"
                    name="email"
                    type="email"
                    maxLength={255}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-company">Company</Label>
                <Input
                  id="lead-company"
                  name="company"
                  maxLength={120}
                  autoComplete="organization"
                />
                {errors.company && (
                  <p className="text-xs text-destructive">{errors.company}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Use Case</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 text-sm"
                    >
                      <span
                        className={cn(
                          "truncate",
                          selected.length === 0 && "text-muted-foreground",
                        )}
                      >
                        {selected.length === 0
                          ? "Select use cases"
                          : selected.join(", ")}
                      </span>
                      <ChevronDown className="size-4 shrink-0 opacity-60" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] p-1">
                    {USE_CASES.map((uc) => (
                      <button
                        key={uc}
                        type="button"
                        onClick={() => toggle(uc)}
                        className="flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm hover:bg-muted"
                      >
                        {uc}
                        {selected.includes(uc) && (
                          <Check className="size-4 text-accent" aria-hidden="true" />
                        )}
                      </button>
                    ))}
                  </PopoverContent>
                </Popover>
                {errors.useCases && (
                  <p className="text-xs text-destructive">{errors.useCases}</p>
                )}
              </div>

              {selected.includes("Other") && (
                <div className="space-y-2">
                  <Label htmlFor="lead-other">Tell us more (optional)</Label>
                  <Textarea
                    id="lead-other"
                    name="otherUseCase"
                    maxLength={300}
                    rows={3}
                    placeholder="Describe your use case"
                  />
                </div>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Submit request
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
