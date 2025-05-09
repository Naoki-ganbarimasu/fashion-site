import ProductCard from "./product-card"

// サンプルデータ
const products = [
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
  {
    id: "5",
    name: "オーガニックコットンスウェット",
    price: 6800,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "6",
    name: "ウールブレンドコート",
    price: 24500,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "7",
    name: "スリムフィットジーンズ",
    price: 8900,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "8",
    name: "ニットセーター",
    price: 10800,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "9",
    name: "プリーツスカート",
    price: 7500,
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
