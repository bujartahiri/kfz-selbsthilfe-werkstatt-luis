import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  titleAccent,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {tag && (
        <div className="mb-3.5">
          <Badge variant="accent" dot>
            {tag}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#f4f3ef] leading-[1.1]">
        {title}{" "}
        {titleAccent && (
          <span className="text-[#d4f82a] block sm:inline">{titleAccent}</span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#8e95a3] font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
