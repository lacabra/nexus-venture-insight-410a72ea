import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/nexuum-logo-mark-light.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Shared Cockpit", href: "#shared-cockpit" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ background: 'hsl(195 55% 8% / 0.92)', borderColor: 'hsl(150 15% 80% / 0.06)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoMark} alt="Nexuum" className="h-8" />
          <span className="text-lg font-semibold tracking-wide text-white">Nexuum</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 text-[#7A9A9E] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden backdrop-blur-xl px-6 pb-6 space-y-4" style={{ background: 'hsl(195 55% 8% / 0.97)', borderBottom: '1px solid hsl(150 15% 80% / 0.06)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium transition-colors text-[#7A9A9E]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="mailto:contact@nexuum.tech?subject=Early%20Access%20Request" onClick={() => setOpen(false)} aria-label="Request early access via email">Request Early Access</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
