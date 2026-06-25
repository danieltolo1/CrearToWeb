import Button from "../atoms/Button";
import { useLocale, useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("CTA");
  const LatamPhone = "+573155693900";
  const UsaPhone = "+12019176786";
  const latamMessage = "Hola, quiero cotizar una página web profesional.";
  const UsaMessage = "Hello, I would like to get a quote for a professional website..";
  const whatsappUrlLatam = `https://wa.me/${LatamPhone}?text=${encodeURIComponent(latamMessage)}`;
  const whatsappUrlUSA = `https://wa.me/${UsaPhone}?text=${encodeURIComponent(UsaMessage)}`;


  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 p-10 text-center md:p-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          {t("quotenow")}
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
          {t("description")}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          {t("description2")}
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center">
          <a href={whatsappUrlLatam} target="_blank">
            <Button>{t("firstbutton")}</Button>
          </a>
          <a href={whatsappUrlUSA} target="_blank">
            <Button>{t("secondbutton")}</Button>
          </a>
        </div>
      </div>
    </section>
  );
}