import logoMark from "@/assets/nexuum-logo-mark-light.png";

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 relative" style={{ background: '#041214', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <img src={logoMark} alt="Nexuum" className="h-7" loading="lazy" />
        <span className="text-base font-semibold tracking-wide" style={{ color: '#FFFFFF' }}>Nexuum</span>
      </div>
      <p className="text-xs" style={{ color: '#5A7A80' }}>
        © {new Date().getFullYear()} Nexuum. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
