import logo from "@/assets/Logo_Nexuum_light.png";

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 relative" style={{ background: 'hsl(202 58% 8%)', borderTop: '1px solid hsl(155 20% 80% / 0.06)' }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Nexuum" className="h-12" />
      <p className="text-xs" style={{ color: 'hsl(155 10% 45%)' }}>
        © {new Date().getFullYear()} Nexuum. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
