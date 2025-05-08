"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SizeSelectorProps {
  sizes: string[]
  onChange?: (size: string) => void
}

export function SizeSelector({ sizes, onChange }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
    onChange?.(size)
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "default" : "outline"}
          className="h-10 uppercase"
          onClick={() => handleSizeSelect(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  )
}
