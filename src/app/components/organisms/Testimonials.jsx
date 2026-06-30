"use client";

import SectionTitle from "../atoms/SectionTitle";
import TestimonialCard from "../molecules/TestimonialCard";
import { useTranslations } from "next-intl";

const clients = [
  "client1",
  "client2",
  "client3"
];

export default function Testimonials() {

  const t = useTranslations("Testimonials");

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-3">

        {clients.map((client) => (

          <TestimonialCard
            key={client}
            name={t(`clients.${client}.name`)}
            business={t(`clients.${client}.business`)}
            comment={t(`clients.${client}.comment`)}
          />

        ))}

      </div>

    </section>

  );

}