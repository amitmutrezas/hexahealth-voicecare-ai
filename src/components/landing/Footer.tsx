export function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="text-lg font-semibold tracking-[-0.03em]">
            VoiceCare <span className="text-accent">AI</span>
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              by HexaHealth
            </span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            AI voice agents for healthcare
          </p>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 HexaHealth</p>
      </div>
    </footer>
  );
}
