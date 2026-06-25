"use client";

import { useTranslations } from "next-intl";
import Button from "../atoms/Button";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative z-10 overflow-hidden px-6 pt-16 pb-20 md:pt-24">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl md:h-96 md:w-96" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 px-4 py-2 text-xs text-cyan-300 md:text-sm">
            {t("badge")}
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-slate-400 md:mx-0 md:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a href="#precios">
              <Button>{t("primaryButton")}</Button>
            </a>

            <a href="#servicios">
              <Button variant="secondary">{t("secondaryButton")}</Button>
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl md:max-w-none md:p-4">
          <div className="rounded-2xl bg-slate-900 p-4 md:p-6">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="mb-4 h-5 w-3/4 rounded bg-white/20" />
            <div className="mb-6 h-5 w-1/2 rounded bg-cyan-400/70" />

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="h-28 rounded-2xl bg-white/10 md:h-36" />
              <div className="h-28 rounded-2xl bg-cyan-400/20 md:h-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}