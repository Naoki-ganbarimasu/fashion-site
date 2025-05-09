import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById, getRelatedProducts } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return <div className="container mx-auto px-4 py-8">商品が見つかりません</div>
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ホーム
        </Link>{" "}
        /{" "}
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          {product.category}
        </Link>{" "}
        / <span className="text-sm">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
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
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews}件のレビュー)</span>
            </div>
            <div className="text-2xl font-bold mb-4">¥{product.price.toLocaleString()}</div>
            {product.description && <p className="text-muted-foreground mb-6">{product.description}</p>}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">カラー</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="rounded-md">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">サイズ</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="h-10">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                カートに追加
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Heart className="mr-2 h-5 w-5" />
                お気に入りに追加
              </Button>
            </div>

            <div className="pt-2">
              <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs">
                {product.inStock ? "在庫あり" : "在庫なし"}
              </Badge>
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
            {product.details ? (
              <ul className="list-disc pl-5 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            ) : (
              <p>詳細情報は準備中です。</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">カスタマーレビュー</h3>
            <p>この商品には {product.reviews} 件のレビューがあります。</p>
            <Button>レビューを書く</Button>
          </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
              <ProductCard product={relatedProduct} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
