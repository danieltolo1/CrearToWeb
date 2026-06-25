import SectionTitle from "../atoms/SectionTitle";
import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("Process");
  const steps = [
    t("step1"),
    t("step2"),
    t("step3"),
    t("step4"),
  ];

  return (
    <section
      id="proceso"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <span className="text-cyan-400 font-bold">
              {index + 1}
            </span>

            <h3 className="mt-2 text-xl font-semibold">
              {step}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}