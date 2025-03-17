import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductBadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "stock" | "sale" | "new";
  className?: string;
}

export function ProductBadge({
  children,
  variant = "default",
  className
}: ProductBadgeProps) {
  return (
    <Badge
      variant={
        variant === "default" || variant === "outline" ? variant : "default"
      }
      className={cn(
        variant === "stock" &&
          "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900",
        variant === "sale" &&
          "bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900",
        variant === "new" &&
          "bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900",
        className
      )}
    >
      {children}
    </Badge>
  );
}
