// components/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes dynamically.
 * Usage: cn("p-4", isActive && "bg-blue-500")
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
