import React from "react";

export const Textarea = React.forwardRef(function Textarea(
  { className = "", ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={`w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm outline-none focus:border-neutral-600 ${className}`}
      {...props}
    />
  );
});
