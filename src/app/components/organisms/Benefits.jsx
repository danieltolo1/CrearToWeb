import SectionTitle from "../atoms/SectionTitle";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Benefits");
  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
    t("benefit4"),
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-4">
        {benefits.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}