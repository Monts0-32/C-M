import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-heading font-bold text-sm tracking-widest text-foreground uppercase mb-3">
            C&M Web Developers
          </p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
            PRECISION-BUILT DIGITAL EXPERIENCES
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
              CONNECT
            </p>
            <div className="space-y-2">
              {["LinkedIn", "GitHub", "Twitter"].map((platform) => (
                <p
                  key={platform}
                  className="font-mono text-xs text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
                >
                  {platform}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-3">
              EMAIL
            </p>
            <p className="font-mono text-xs text-foreground">
              hello@cmwebdev.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} C&M WEB DEVELOPERS. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          BUILT WITH PRECISION
        </p>
      </div>
    </footer>
  );
}