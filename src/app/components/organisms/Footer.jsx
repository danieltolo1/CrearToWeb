export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-slate-400 md:flex-row">
        <p>
          © 2026 Web<span className="text-cyan-400">Studio</span>
        </p>

        <div className="flex gap-6">
          <a href="#servicios">Servicios</a>
          <a href="#precios">Precios</a>
          <a href="#portafolio">Portafolio</a>
        </div>
      </div>
    </footer>
  );
}