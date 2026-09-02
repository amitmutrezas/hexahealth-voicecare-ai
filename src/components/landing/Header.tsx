import { useEffect, useState } from "react";
import { CalendarCheck, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Product", id: "product" },
  { label: "Technology", id: "technology" },
  { label: "Use Cases", id: "use-cases" },
  { label: "How it works", id: "how-it-works" },
  { label: "About Us", id: "about" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-xl transition-shadow",
        scrolled ? "border-b border-border shadow-soft" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 flex-col leading-none"
          aria-label="VoiceCare AI home"
        >
          <span className="truncate text-[1.35rem] font-semibold tracking-[-0.04em]">
            VoiceCare <span className="text-accent">AI</span>
          </span>
          <span className="mt-1 flex items-center gap-1.5 text-[0.6875rem] text-muted-foreground">
            by
            <span className="inline-flex items-center gap-1 font-medium text-foreground">
              <span className="inline-block size-2.5 rotate-45 rounded-[3px] bg-accent" />
              HexaHealth
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 justify-self-center lg:flex"
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                active === item.id && "text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => scrollToId("demo")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:px-5"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Book a demo</span>
            <span className="sm:hidden">Demo</span>
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}

          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 py-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item.id);
                  }}
                  className="w-full py-2.5 text-left text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
