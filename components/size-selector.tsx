"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SizeSelectorProps {
  sizes: string[];
}

export function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-5 gap-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "default" : "outline"}
          className="h-10 uppercase"
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}
