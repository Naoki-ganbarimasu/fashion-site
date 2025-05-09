import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">すべての商品</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters />
        </div>

        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </main>
  )
}
