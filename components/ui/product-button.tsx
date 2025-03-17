import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cart" | "wishlist";
  isActive?: boolean;
}

export const ProductButton = forwardRef<HTMLButtonElement, ProductButtonProps>(
  ({ className, variant = "cart", isActive = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "flex items-center gap-2",
          isActive &&
            variant === "wishlist" &&
            "bg-pink-100 text-pink-600 hover:bg-pink-200 hover:text-pink-700",
          className
        )}
        {...props}
      >
        {variant === "cart" && <ShoppingCart className="h-5 w-5" />}
        {variant === "wishlist" && (
          <Heart className={cn("h-5 w-5", isActive && "fill-current")} />
        )}
        {variant === "cart" && "Add to Cart"}
        {variant === "wishlist" && "Add to Wishlist"}
      </Button>
    );
  }
);

ProductButton.displayName = "ProductButton";
