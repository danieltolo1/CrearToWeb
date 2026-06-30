"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "../atoms/SectionTitle";
import Button from "../atoms/Button";

const planKeys = ["basic", "professional", "premium"];

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section id="precios" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {planKeys.map((plan) => {
          const features = t.raw(`plans.${plan}.features`);

          return (
            <article
              key={plan}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold">
                {t(`plans.${plan}.name`)}
              </h3>

              <p className="mt-4 text-4xl font-bold text-cyan-400">
                {t(`plans.${plan}.price`)}
              </p>

              <ul className="my-8 space-y-3 text-slate-300">
                {features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Button>{t(`plans.${plan}.button`)}</Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}