import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/rating-stars";

interface RelatedProductsProps {
  currentProductId: string;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // This would typically come from a database or API
  // Filtering products in the same category but excluding the current product
  const relatedProducts = [
    {
      id: "2",
      name: "Slim Fit Jeans",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=200",
      category: "bottoms",
      rating: 4.2
    },
    {
      id: "3",
      name: "Leather Jacket",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=200",
      category: "outerwear",
      rating: 4.8
    },
    {
      id: "5",
      name: "Classic Oxford Shirt",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=200",
      category: "tops",
      rating: 4.4
    },
    {
      id: "6",
      name: "Wool Sweater",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=200",
      category: "tops",
      rating: 4.3
    }
  ]
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <RatingStars rating={product.rating} size="sm" className="mt-1" />
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="font-bold">${product.price.toFixed(2)}</div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
