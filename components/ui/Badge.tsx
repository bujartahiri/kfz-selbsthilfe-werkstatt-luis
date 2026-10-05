import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline" | "solid";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "muted",
  size = "sm",
  className = "",
  dot = false,
}: BadgeProps) {
  const base =
    "inline-flex items-center font-mono font-medium tracking-wider uppercase select-none rounded-[2px]";

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-2",
  };

  const variants = {
    accent:
      "bg-[rgba(212,248,42,0.12)] text-[#d4f82a] border border-[rgba(212,248,42,0.3)]",
    muted:
      "bg-[#16181f] text-[#8e95a3] border border-[#242935]",
    outline:
      "bg-transparent text-[#f4f3ef] border border-[#363d4e]",
    solid:
      "bg-[#222732] text-[#f4f3ef]",
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === "accent" ? "bg-[#d4f82a] animate-pulse" : "bg-current opacity-60"
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
