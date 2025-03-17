"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ColorSelectorProps {
  colors: string[];
}

export function ColorSelector({ colors }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Map color names to CSS color values
  const colorMap: Record<string, string> = {
    black: "bg-black",
    white: "bg-white border border-gray-200",
    gray: "bg-gray-400",
    blue: "bg-blue-500",
    red: "bg-red-500",
    brown: "bg-amber-800",
    navy: "bg-indigo-900",
    burgundy: "bg-red-800",
    green: "bg-green-600",
    pink: "bg-pink-400",
    floral: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
  };

  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            colorMap[color]
          } ${
            selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : ""
          }`}
          onClick={() => setSelectedColor(color)}
          aria-label={`Select ${color} color`}
        >
          {selectedColor === color && color !== "white" && (
            <Check className="h-4 w-4 text-white" />
          )}
          {selectedColor === color && color === "white" && (
            <Check className="h-4 w-4 text-black" />
          )}
        </button>
      ))}
    </div>
  );
}
