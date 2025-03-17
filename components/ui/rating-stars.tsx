import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showValue?: boolean;
  reviewCount?: number;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  className,
  showValue = false,
  reviewCount
}: RatingStarsProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[...Array(maxRating)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              sizeClasses[size],
              i < Math.floor(rating)
                ? "fill-primary text-primary"
                : "fill-muted text-muted-foreground"
            )}
          />
        ))}
      </div>

      {showValue && (
        <>
          <span
            className={cn("font-medium", size === "sm" ? "text-xs" : "text-sm")}
          >
            {rating.toFixed(1)}
          </span>

          {reviewCount !== undefined && (
            <span
              className={cn(
                "text-muted-foreground",
                size === "sm" ? "text-xs" : "text-sm"
              )}
            >
              ({reviewCount})
            </span>
          )}
        </>
      )}
    </div>
  );
}
