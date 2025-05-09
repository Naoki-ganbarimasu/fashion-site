import ProductCard from "./product-card"

// サンプルデータ
const featuredProducts = [
  {
    id: "1",
    name: "オーバーサイズコットンTシャツ",
    price: 4500,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "2",
    name: "リネンブレンドシャツ",
    price: 7800,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "3",
    name: "ワイドレッグパンツ",
    price: 9200,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "4",
    name: "クロップドジャケット",
    price: 12500,
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
