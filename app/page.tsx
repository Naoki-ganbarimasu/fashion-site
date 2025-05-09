import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import FeaturedProducts from "@/components/featured-products"
import CategorySection from "@/components/category-section"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fashion hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">新しいスタイルを発見する</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            最新のトレンドとスタイルで、あなたのワードローブを刷新しましょう。
          </p>
          <Link
            href="/products"
            className="bg-white text-black px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            ショッピングを始める <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">注目の商品</h2>
          <Link href="/products" className="text-sm font-medium flex items-center gap-1 hover:underline">
            すべて見る <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <FeaturedProducts />
      </section>

      {/* Categories */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">カテゴリー</h2>
        <CategorySection />
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Newsletter />
      </section>
    </main>
  )
}
