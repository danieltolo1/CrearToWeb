"use client";

import { useTranslations } from "next-intl";
import { useForm } from "@formspree/react";

export default function Contact() {
  const t = useTranslations("Contact");

  const [state, handleSubmit] = useForm("mykqnnvz");

  if (state.succeeded) {
    return (
      <section id="contacto" className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 text-center">
          <h2 className="text-3xl font-bold text-cyan-400">
            {t("success")}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {t("description")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
      >
        <input
          type="text"
          name="name"
          required
          placeholder={t("name")}
          className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />

        <input
          type="email"
          name="email"
          required
          placeholder={t("email")}
          className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />

        <textarea
          name="message"
          required
          rows="5"
          placeholder={t("message")}
          className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />

        {state.errors && (
          <p className="text-sm text-red-400">
            {t("error")}
          </p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full rounded-xl bg-cyan-400 p-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? t("sending") : t("button")}
        </button>
      </form>
    </section>
  );
}