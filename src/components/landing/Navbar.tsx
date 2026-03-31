import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo_Nexuum_light.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Shared Cockpit", href: "#shared-cockpit" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-xl border-b" style={{ borderColor: 'hsl(155 20% 80% / 0.06)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Nexuum.Tech" className="h-12 -my-2" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'hsl(155 10% 55%)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(155 12% 90%)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(155 10% 55%)')}
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
          className="md:hidden"
          style={{ color: 'hsl(155 12% 80%)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden backdrop-blur-xl px-6 pb-6 space-y-4" style={{ background: 'hsl(202 58% 9% / 0.97)', borderBottom: '1px solid hsl(155 20% 80% / 0.06)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium transition-colors"
              style={{ color: 'hsl(155 10% 55%)' }}
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
