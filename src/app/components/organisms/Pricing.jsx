import SectionTitle from "../atoms/SectionTitle";
import Button from "../atoms/Button";
import { useTranslations } from "next-intl";



export default function Pricing() {
  const t = useTranslations("Pricing");
  const plans = [
  {
    name: "Básico",
    price: "Mensual Basico",
    features: ["Landing page", "Diseño responsive", "Formulario de contacto"],
  },
  {
    name: "Profesional",
    price: "Mensual Profesional",
    features: ["Hasta 5 secciones", "SEO básico", "WhatsApp integrado"],
  },
  {
    name: "Premium",
    price: "Mesual Premium",
    features: ["Web completa", "Animaciones", "Soporte inicial"],
  },
  ];
  return (
    <section id="precios" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="mt-4 text-4xl font-bold text-cyan-400">
              {plan.price}
            </p>

            <ul className="my-8 space-y-3 text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <Button>Solicitar</Button>
          </article>
        ))}
      </div>
    </section>
  );
}