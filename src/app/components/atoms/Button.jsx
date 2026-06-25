export default function Button({ children, variant = "primary" }) {
  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20",
    secondary:
      "border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}