"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Nombre: ${form.name}
Email: ${form.email}
Proyecto: ${form.project}
`;

    window.open(
      `https://wa.me/50760000000?text=${encodeURIComponent(
        message
      )}`
    );
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Solicita tu cotización
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <input
          placeholder="Nombre"
          className="w-full rounded-xl bg-slate-900 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Correo"
          className="w-full rounded-xl bg-slate-900 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Cuéntanos tu proyecto"
          rows="5"
          className="w-full rounded-xl bg-slate-900 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              project: e.target.value,
            })
          }
        />

        <button
          className="w-full rounded-xl bg-cyan-400 p-4 font-semibold text-slate-950"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}