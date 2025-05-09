import Image from "next/image"
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react"
import Link from "next/link"

export default function ProductPage({ params }: { params: { id: string } }) {
  // 実際のアプリでは、ここでproduct IDを使用してデータを取得します
  const product = {
    id: params.id,
    name: "オーバーサイズコットンTシャツ",
    price: 4500,
    description: "高品質のコットン素材を使用した快適なオーバーサイズTシャツ。カジュアルなスタイリングに最適です。",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["ブラック", "ホワイト", "グレー"],
    rating: 4.5,
    reviews: 128,
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/products" className="flex items-center gap-2 text-sm mb-8 hover:underline">
        <ArrowLeft className="h-4 w-4" /> 商品一覧に戻る
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square relative">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.reviews} レビュー</span>
          </div>

          <p className="text-2xl font-bold mb-6">¥{product.price.toLocaleString()}</p>

          <div className="mb-6">
            <h3 className="font-medium mb-2">説明</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">サイズ</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:border-black transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-medium mb-2">カラー</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:border-black transition-colors"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <ShoppingBag className="h-5 w-5" /> カートに追加
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:border-black transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
