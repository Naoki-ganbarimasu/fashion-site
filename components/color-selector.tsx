"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { colorMap } from "@/components/ui/color-map"

interface ColorSelectorProps {
  colors: string[]
  onChange?: (color: string) => void
}

export function ColorSelector({ colors, onChange }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
    onChange?.(color)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${colorMap[color] || "bg-gray-200"} ${
            selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : ""
          }`}
          onClick={() => handleColorSelect(color)}
          aria-label={`${color}色を選択`}
        >
          {selectedColor === color && color !== "white" && <Check className="h-4 w-4 text-white" />}
          {selectedColor === color && color === "white" && <Check className="h-4 w-4 text-black" />}
        </button>
      ))}
    </div>
  )
}
