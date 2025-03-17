"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const categories = ["tops", "bottoms", "outerwear", "dresses", "accessories"];
  const colors = [
    "black",
    "white",
    "gray",
    "blue",
    "red",
    "brown",
    "navy",
    "burgundy",
    "green",
    "pink",
    "floral"
  ];
  const sizes = [
    "xs",
    "s",
    "m",
    "l",
    "xl",
    "xxl",
    "28",
    "30",
    "32",
    "34",
    "36"
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleFiltersVisibility = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleFiltersVisibility}
          className="flex items-center gap-1 sm:hidden"
        >
          {isFiltersVisible ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span className="text-sm">Hide</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span className="text-sm">Show</span>
            </>
          )}
        </Button>
      </div>

      {isFiltersVisible && (
        <>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="price"
          >
            <AccordionItem value="price">
              <AccordionTrigger className="text-sm font-medium">
                Price Range
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <Slider
                    defaultValue={[0, 200]}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="category">
              <AccordionTrigger className="text-sm font-medium">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {selectedCategories.length === 0
                        ? "Select categories"
                        : `${selectedCategories.length} selected`}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
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
              <AccordionTrigger className="text-sm font-medium">
                Color
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                      className={`justify-start capitalize ${
                        selectedColors.includes(color) ? "bg-muted" : ""
                      }`}
                      onClick={() => toggleColor(color)}
                    >
                      {selectedColors.includes(color) && (
                        <Check className="mr-1 h-4 w-4" />
                      )}
                      {color}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="size">
              <AccordionTrigger className="text-sm font-medium">
                Size
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      className={`justify-center uppercase ${
                        selectedSizes.includes(size) ? "bg-muted" : ""
                      }`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="w-full mt-4">Apply Filters</Button>
          <Button variant="outline" className="w-full">
            Reset
          </Button>
        </>
      )}
    </div>
  );
}
