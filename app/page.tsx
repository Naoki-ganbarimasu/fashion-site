import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";

// This would typically come from a database or API
const products = [
  {
    id: "1",
    name: "Casual Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "tops",
    colors: ["black", "white", "gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "bottoms",
    colors: ["blue", "black"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.2,
    reviews: 95
  },
  {
    id: "3",
    name: "Leather Jacket",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "outerwear",
    colors: ["brown", "black"],
    sizes: ["s", "m", "l", "xl"],
    rating: 4.8,
    reviews: 42
  },
  {
    id: "4",
    name: "Summer Dress",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "dresses",
    colors: ["red", "blue", "floral"],
    sizes: ["xs", "s", "m", "l"],
    rating: 4.6,
    reviews: 67
  },
  {
    id: "5",
    name: "Classic Oxford Shirt",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "tops",
    colors: ["white", "blue", "pink"],
    sizes: ["s", "m", "l", "xl", "xxl"],
    rating: 4.4,
    reviews: 103
  },
  {
    id: "6",
    name: "Wool Sweater",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "tops",
    colors: ["navy", "burgundy", "green"],
    sizes: ["s", "m", "l", "xl"],
    rating: 4.3,
    reviews: 78
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fashion Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProductFilters />
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
