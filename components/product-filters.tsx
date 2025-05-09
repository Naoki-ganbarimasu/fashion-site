"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { categories, colors, sizes } from "@/lib/data"

export function ProductFilters() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])

  const toggleFiltersVisibility = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
    setPriceRange([0, 20000])
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
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm">
                      <input
                        type="radio"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 0 && priceRange[1] === 5000}
                        onChange={() => setPriceRange([0, 5000])}
                      />
                      ¥5,000以下
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 5000 && priceRange[1] === 10000}
                        onChange={() => setPriceRange([5000, 10000])}
                      />
                      ¥5,000 - ¥10,000
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 10000 && priceRange[1] === 20000}
                        onChange={() => setPriceRange([10000, 20000])}
                      />
                      ¥10,000 - ¥20,000
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 20000 && priceRange[1] === 50000}
                        onChange={() => setPriceRange([20000, 50000])}
                      />
                      ¥20,000以上
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="category">
              <AccordionTrigger className="text-sm font-medium">カテゴリー</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="color">
              <AccordionTrigger className="text-sm font-medium">カラー</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                      className={`justify-start ${selectedColors.includes(color) ? "bg-muted" : ""}`}
                      onClick={() => toggleColor(color)}
                    >
                      {selectedColors.includes(color) && <Check className="mr-1 h-4 w-4" />}
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
                      className={`justify-center ${selectedSizes.includes(size) ? "bg-muted" : ""}`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="w-full mt-4">フィルターを適用</Button>
          <Button variant="outline" className="w-full" onClick={resetFilters}>
            リセット
          </Button>
        </>
      )}
    </div>
  )
}
