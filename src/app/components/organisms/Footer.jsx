"use client";

import { useLocale, useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const year = new Date().getFullYear();
  const nextLocale = locale === "es" ? "en" : "es";

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <a href={`/${locale}`} className="inline-block">
            <h2 className="text-2xl font-bold text-white">
              Crear<span className="text-cyan-400">ToWeb</span>
            </h2>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            {t("description")}
          </p>

          <a
            href={`/${nextLocale}`}
            className="mt-6 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            {nextLocale === "es" ? "Español" : "English"}
          </a>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">{t("navigation")}</h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href={`/${locale}`} className="hover:text-cyan-400">
                {t("home")}
              </a>
            </li>
            <li>
              <a href="#portafolio" className="hover:text-cyan-400">
                {t("portfolio")}
              </a>
            </li>
            <li>
              <a href="#precios" className="hover:text-cyan-400">
                {t("pricing")}
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-cyan-400">
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">{t("services")}</h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>{t("landingPages")}</li>
            <li>{t("corporateWebsites")}</li>
            <li>{t("onlineStores")}</li>
            <li>{t("maintenance")}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">{t("contact")}</h3>

         

          <div className="mt-6 flex gap-4 text-slate-400">
            <a href="#" className="hover:text-cyan-400">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
        <p>
          © {year} CrearToWeb. {t("rights")}
        </p>

        <p>{t("developed")}</p>
      </div>
    </footer>
  );
}