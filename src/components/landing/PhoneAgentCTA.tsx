import { useState, type FormEvent } from "react";
import { Phone, PartyPopper } from "lucide-react";
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

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(120),
});

export function PhoneAgentCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-pill transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <Phone className="size-4" aria-hidden="true" />
            Try an agent
          </button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          {submitted ? (
            <div className="py-6 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent-soft">
                <PartyPopper className="size-5 text-accent" aria-hidden="true" />
              </span>
              <DialogHeader className="mt-4">
                <DialogTitle className="text-center">Thanks — request received</DialogTitle>
                <DialogDescription className="text-center">
                  Our team will reach out shortly to connect you with a VoiceCare AI agent.
                </DialogDescription>
              </DialogHeader>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Try a VoiceCare AI agent</DialogTitle>
                <DialogDescription>
                  Leave your details and we&apos;ll set up a personalized agent call.
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
                  Submit request
                </button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <p className="mt-3 px-1 text-sm text-muted-foreground">
        Click to experience a VoiceCare AI agent firsthand.
      </p>
    </div>
  );
}
