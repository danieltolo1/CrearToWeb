export default function TestimonialCard({
  name,
  business,
  comment,
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="mb-6 text-slate-300">
        "{comment}"
      </p>

      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-slate-400">
          {business}
        </p>
      </div>
    </article>
  );
}