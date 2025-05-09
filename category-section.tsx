import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "レディース",
    image: "/placeholder.svg?height=600&width=400",
    link: "/products?category=women",
  },
  {
    name: "メンズ",
    image: "/placeholder.svg?height=600&width=400",
    link: "/products?category=men",
  },
  {
    name: "アクセサリー",
    image: "/placeholder.svg?height=600&width=400",
    link: "/products?category=accessories",
  },
]

export default function CategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.link}
          className="group relative overflow-hidden rounded-lg aspect-[3/4]"
        >
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
