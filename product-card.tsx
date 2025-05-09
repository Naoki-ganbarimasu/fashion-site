import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <Link href={`/products/${product.id}`}>
        <h3 className="font-medium mb-1">{product.name}</h3>
      </Link>
      <p className="text-gray-900">¥{product.price.toLocaleString()}</p>
    </div>
  )
}
