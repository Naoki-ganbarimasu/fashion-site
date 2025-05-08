import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductReviews } from "@/components/product-reviews"
import { SizeSelector } from "@/components/size-selector"
import { ColorSelector } from "@/components/color-selector"
import { RelatedProducts } from "@/components/related-products"
import { ProductButton } from "@/components/ui/product-button"
import { RatingStars } from "@/components/ui/rating-stars"
import { ProductBadge } from "@/components/ui/product-badge"
import { getProductById } from "@/lib/product-data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return <div className="container mx-auto px-4 py-8">商品が見つかりません</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ホーム
        </Link>{" "}
        /{" "}
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>{" "}
        / <span className="text-sm">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images?.[0] || product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {product.images && (
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
          )}
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
            <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>
            <p className="text-muted-foreground mb-6">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">カラー</h3>
              <ColorSelector colors={product.colors} />
            </div>

            <div>
              <h3 className="font-medium mb-2">サイズ</h3>
              <SizeSelector sizes={product.sizes} />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <ProductButton variant="cart" size="lg" className="flex-1" />
              <ProductButton variant="wishlist" size="lg" className="flex-1" />
            </div>

            <div className="pt-2">
              <ProductBadge variant="stock" className="text-xs">
                {product.inStock ? "在庫あり" : "在庫なし"}
              </ProductBadge>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none">
          <TabsTrigger value="details">商品詳細</TabsTrigger>
          <TabsTrigger value="reviews">レビュー</TabsTrigger>
          <TabsTrigger value="shipping">配送・返品</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">特徴</h3>
            <ul className="list-disc pl-5 space-y-2">
              {product.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviews} />
        </TabsContent>
        <TabsContent value="shipping" className="pt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">配送情報</h3>
            <p>5,000円以上のご注文で送料無料。通常3〜5営業日以内に発送いたします。</p>

            <h3 className="font-semibold text-lg">返品ポリシー</h3>
            <p>
              商品到着後30日以内の返品を受け付けております。返品の際は、商品が未使用・未洗濯で、タグが付いた状態である必要があります。
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-2xl font-bold mb-6">おすすめ商品</h2>
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </div>
  )
}
