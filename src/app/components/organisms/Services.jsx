import SectionTitle from "../atoms/SectionTitle";
import ServiceCard from "../molecules/ServiceCard";
import { useTranslations } from "next-intl";



export default function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("service1"),
      description: t("servicedes1"),
    },
    {
      title: t("service2"),
      description: t("servicedes2"),
    },
    {
      title: t("service3"),
      description: t("servicedes3"),
    },
    {
      title: t("service4"),
      description: t("servicedes4"),
    },
  ];

  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}