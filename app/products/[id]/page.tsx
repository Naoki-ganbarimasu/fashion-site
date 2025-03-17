import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductReviews } from "@/components/product-reviews";
import { SizeSelector } from "@/components/size-selector";
import { ColorSelector } from "@/components/color-selector";
import { RelatedProducts } from "@/components/related-products";
import { ProductButton } from "@/components/ui/product-button";
import { RatingStars } from "@/components/ui/rating-stars";
import { ProductBadge } from "@/components/ui/product-badge";

// This would typically come from a database or API based on the ID
const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Casual Cotton T-Shirt",
      price: 29.99,
      images: [
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400"
      ],
      category: "tops",
      colors: ["black", "white", "gray"],
      sizes: ["xs", "s", "m", "l", "xl"],
      rating: 4.5,
      reviews: 128,
      description:
        "A comfortable, casual t-shirt made from 100% organic cotton. Perfect for everyday wear with a relaxed fit and soft feel.",
      details: [
        "100% organic cotton",
        "Regular fit",
        "Crew neck",
        "Machine washable",
        "Imported"
      ],
      inStock: true
    }
  ];

  return products.find((product) => product.id === id);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:underline"
        >
          Home
        </Link>{" "}
        /{" "}
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:underline"
        >
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>{" "}
        / <span className="text-sm">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg border cursor-pointer hover:border-primary"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <RatingStars
              rating={product.rating}
              showValue={true}
              reviewCount={product.reviews}
              size="lg"
              className="mb-4"
            />
            <div className="text-2xl font-bold mb-4">
              ${product.price.toFixed(2)}
            </div>
            <p className="text-muted-foreground mb-6">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <ColorSelector colors={product.colors} />
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <SizeSelector sizes={product.sizes} />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <ProductButton variant="cart" className="flex-1" />
              <ProductButton variant="wishlist" className="flex-1" />
            </div>

            <div className="pt-2">
              <ProductBadge variant="stock" className="text-xs">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </ProductBadge>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <ProductReviews
            rating={product.rating}
            reviewCount={product.reviews}
          />
        </TabsContent>
        <TabsContent value="shipping" className="pt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Shipping Information</h3>
            <p>
              Free standard shipping on orders over $50. Estimated delivery time
              is 3-5 business days.
            </p>

            <h3 className="font-semibold text-lg">Return Policy</h3>
            <p>
              We accept returns within 30 days of delivery. Items must be
              unworn, unwashed, and with the original tags attached.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <RelatedProducts
          currentProductId={product.id}
        />
      </div>
    </div>
  );
}
