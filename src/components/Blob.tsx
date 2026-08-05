import clsx from "clsx";

interface BlobProps {
  className?: string;
  color?: string;
  animate?: "float-slow" | "float-slower";
}

/** Soft, gel-like decorative background shape. Purely ornamental. */
export default function Blob({ className, color, animate }: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute rounded-full blur-3xl",
        animate === "float-slow" && "animate-float-slow",
        animate === "float-slower" && "animate-float-slower",
        className
      )}
      style={color ? { background: color } : undefined}
    />
  );
}
