"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const nextLocale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-[9999] border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <a href={`/${locale}`}>
          <h1 className="text-xl font-bold">
            Crear<span className="text-cyan-400">ToWeb</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {t("services")}
          </a>

          <a
            href="#proceso"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {t("process")}
          </a>

          <a
            href="#precios"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {t("pricing")}
          </a>

          <a
            href="#portafolio"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            {t("portfolio")}
          </a>

          {/* Cambio idioma */}
          <a
            href={`/${nextLocale}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            {nextLocale.toUpperCase()}
          </a>

          {/* CTA */}
          <a
            href="#contacto"
            className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {t("quote")}
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`/${nextLocale}`}
            className="rounded-full border border-white/20 px-3 py-2 text-xs text-white"
          >
            {nextLocale.toUpperCase()}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="flex flex-col px-4 py-4">
            <a
              href="#servicios"
              className="py-3 text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {t("services")}
            </a>

            <a
              href="#proceso"
              className="py-3 text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {t("process")}
            </a>

            <a
              href="#precios"
              className="py-3 text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {t("pricing")}
            </a>

            <a
              href="#portafolio"
              className="py-3 text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {t("portfolio")}
            </a>

            <a
              href="#contacto"
              className="mt-4 rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              {t("quote")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}