import React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition";
  const variants = {
    default: "bg-white text-neutral-900 hover:opacity-90",
    outline: "border border-neutral-700 text-white hover:bg-neutral-800",
  };
  return (
    <button className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </button>
  );
}
