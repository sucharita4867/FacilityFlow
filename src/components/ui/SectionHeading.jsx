export default function SectionHeading({
  title,
  subtitle,
  center = false,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
        {subtitle}
      </p>

      <h2 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}