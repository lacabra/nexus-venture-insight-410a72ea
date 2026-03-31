import logoMark from "@/assets/nexuum-logo-mark-light.png";

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 relative" style={{ background: 'hsl(195 55% 6%)', borderTop: '1px solid hsl(150 15% 80% / 0.06)' }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <img src={logoMark} alt="Nexuum" className="h-7" loading="lazy" />
        <span className="text-base font-semibold tracking-wide text-white/90">Nexuum</span>
      </div>
      <p className="text-xs text-[#5A7A7E]">
        © {new Date().getFullYear()} Nexuum. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
