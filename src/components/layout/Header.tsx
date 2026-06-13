import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/consultants", label: "Consultants" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img src={logo} alt="Olympus Lanka Hospital logo" className="h-10 w-10 shrink-0" width={40} height={40} />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-bold text-brand">Olympus Lanka</div>
            <div className="truncate text-xs text-muted-foreground">Hospital · Tissamaharama</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand hover:bg-accent transition-colors"
              activeProps={{ className: "text-brand bg-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" /> {SITE.phones[0]}
            </Button>
          </a>
          <Link to="/consultants">
            <Button size="sm" className="bg-emergency text-emergency-foreground hover:bg-emergency/90">Book Appointment</Button>
          </Link>
        </div>

        <button className="lg:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">
                {n.label}
              </Link>
            ))}
            <Link to="/consultants" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 bg-emergency text-emergency-foreground hover:bg-emergency/90">Book Appointment</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
