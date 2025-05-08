"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { categories, colors, sizes } from "@/lib/product-data"
import type { ProductCategory, ProductColor, ProductSize } from "@/types"

interface FilterState {
  priceRange: [number, number]
  categories: ProductCategory[]
  colors: ProductColor[]
  sizes: ProductSize[]
}

interface ProductFiltersProps {
  onFilterChange?: (filters: FilterState) => void
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 200],
    categories: [],
    colors: [],
    sizes: [],
  })

  const toggleFiltersVisibility = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const updateFilters = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const toggleCategory = (category: ProductCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]

    updateFilters("categories", newCategories)
  }

  const toggleColor = (color: ProductColor) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color]

    updateFilters("colors", newColors)
  }

  const toggleSize = (size: ProductSize) => {
    const newSizes = filters.sizes.includes(size) ? filters.sizes.filter((s) => s !== size) : [...filters.sizes, size]

    updateFilters("sizes", newSizes)
  }

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      priceRange: [0, 200],
      categories: [],
      colors: [],
      sizes: [],
    }
    setFilters(defaultFilters)
    onFilterChange?.(defaultFilters)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg flex items-center gap-2">
          <Filter className="h-5 w-5" />
          フィルター
        </div>
        <Button variant="ghost" size="sm" onClick={toggleFiltersVisibility} className="flex items-center gap-1">
          {isFiltersVisible ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span className="text-sm">非表示</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span className="text-sm">表示</span>
            </>
          )}
        </Button>
      </div>

      {isFiltersVisible && (
        <>
          <Accordion type="single" collapsible className="w-full" defaultValue="price">
            <AccordionItem value="price">
              <AccordionTrigger className="text-sm font-medium">価格帯</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <Slider
                    defaultValue={[0, 200]}
                    max={500}
                    step={10}
                    value={filters.priceRange}
                    onValueChange={(value) => updateFilters("priceRange", value as [number, number])}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${filters.priceRange[0]}</span>
                    <span className="text-sm">${filters.priceRange[1]}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="category">
              <AccordionTrigger className="text-sm font-medium">カテゴリー</AccordionTrigger>
              <AccordionContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {filters.categories.length === 0 ? "カテゴリーを選択" : `${filters.categories.length}個選択中`}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>カテゴリー</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={filters.categories.includes(category as ProductCategory)}
                        onCheckedChange={() => toggleCategory(category as ProductCategory)}
                        className="capitalize"
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="color">
              <AccordionTrigger className="text-sm font-medium">カラー</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                      className={`justify-start capitalize ${
                        filters.colors.includes(color as ProductColor) ? "bg-muted" : ""
                      }`}
                      onClick={() => toggleColor(color as ProductColor)}
                    >
                      {filters.colors.includes(color as ProductColor) && <Check className="mr-1 h-4 w-4" />}
                      {color}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="size">
              <AccordionTrigger className="text-sm font-medium">サイズ</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      className={`justify-center uppercase ${
                        filters.sizes.includes(size as ProductSize) ? "bg-muted" : ""
                      }`}
                      onClick={() => toggleSize(size as ProductSize)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="w-full mt-4" onClick={() => onFilterChange?.(filters)}>
            フィルターを適用
          </Button>
          <Button variant="outline" className="w-full" onClick={resetFilters}>
            リセット
          </Button>
        </>
      )}
    </div>
  )
}
