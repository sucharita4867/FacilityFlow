import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-[#0B1F3A] text-white hover:bg-[#16325b]"
          : "border border-slate-300 bg-white hover:bg-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}