export default function ServiceCard({ title, description }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-xl text-slate-950">
        ✦
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </article>
  );
}