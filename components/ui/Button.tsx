import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent-ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0f12] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 rounded-sm",
    md: "text-sm px-5 py-3 gap-2 rounded-sm",
    lg: "text-base px-6 py-3.5 gap-2.5 rounded-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#d4f82a] text-[#0d0f12] font-semibold hover:bg-[#bde01e] focus-visible:ring-[#d4f82a] shadow-sm hover:shadow-[0_0_20px_rgba(212,248,42,0.25)]",
    secondary:
      "bg-[#1b1e25] text-[#f4f3ef] border border-[#262a34] hover:border-[#383f4f] hover:bg-[#222732] focus-visible:ring-[#8e95a3]",
    outline:
      "bg-transparent text-[#f4f3ef] border border-[#363d4e] hover:border-[#d4f82a] hover:text-[#d4f82a] focus-visible:ring-[#d4f82a]",
    ghost:
      "bg-transparent text-[#8e95a3] hover:text-[#f4f3ef] hover:bg-[#1b1e25] focus-visible:ring-[#8e95a3]",
    "accent-ghost":
      "bg-transparent text-[#d4f82a] hover:bg-[rgba(212,248,42,0.08)] focus-visible:ring-[#d4f82a]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal || href.startsWith("http") ? "_blank" : undefined}
          rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
