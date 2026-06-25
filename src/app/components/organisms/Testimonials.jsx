import SectionTitle from "../atoms/SectionTitle";
import TestimonialCard from "../molecules/TestimonialCard";

const testimonials = [
  {
    name: "Carlos Mendoza",
    business: "Restaurante La Esquina",
    comment:
      "Nuestra página web comenzó a generar reservas desde la primera semana.",
  },
  {
    name: "Ana Torres",
    business: "Studio Beauty",
    comment:
      "La imagen de nuestra empresa mejoró muchísimo y conseguimos más clientes.",
  },
  {
    name: "Luis Rodríguez",
    business: "Consultor Financiero",
    comment:
      "Excelente trabajo. El sitio es rápido, moderno y profesional.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="Clientes"
        title="Lo que dicen nuestros clientes"
        description="Resultados reales para negocios reales."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
}