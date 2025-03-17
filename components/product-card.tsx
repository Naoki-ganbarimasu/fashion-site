import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/rating-stars";
import { ProductBadge } from "@/components/ui/product-badge";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <RatingStars
          rating={product.rating}
          showValue={true}
          reviewCount={product.reviews}
          size="sm"
          className="mb-2"
        />
        <div className="flex flex-wrap gap-1 mb-2">
          {product.colors.slice(0, 3).map((color) => (
            <Badge key={color} variant="outline" className="text-xs capitalize">
              {color}
            </Badge>
          ))}
          {product.colors.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{product.colors.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <ProductBadge className="capitalize">{product.category}</ProductBadge>
      </CardFooter>
    </Card>
  );
}
