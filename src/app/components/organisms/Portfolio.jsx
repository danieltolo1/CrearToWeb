import SectionTitle from "../atoms/SectionTitle";

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <SectionTitle
        eyebrow="Portafolio"
        title="Algunos proyectos"
        description="Ejemplos de sitios web desarrollados."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-64 rounded-3xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </section>
  );
}