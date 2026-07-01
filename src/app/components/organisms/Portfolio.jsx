"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionTitle from "../atoms/SectionTitle";

const projects = [
  {
    title: "Asiatol",
    image: "https://i.imgur.com/DsYCu5S.png",
    url: "https://www.asiatol.com.co",
  },
  {
    title: "Asuamerica",
    image: "https://i.imgur.com/PQHJ0pT.png",
    url: "https://www.asuamerica.com",
  },
  {
    title: "Developer Web Portfolio",
    image: "https://i.imgur.com/zYhJgRY.png",
    url: "https://portfolio-daniel-torres.vercel.app/",
  },
];

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  return (
    <section id="portafolio" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-cyan-400">
                {t("viewProject")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}