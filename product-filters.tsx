"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FilterSection {
  title: string
  options: string[]
}

const filterSections: FilterSection[] = [
  {
    title: "カテゴリー",
    options: ["トップス", "ボトムス", "アウター", "ドレス", "シューズ", "アクセサリー"],
  },
  {
    title: "サイズ",
    options: ["XS", "S", "M", "L", "XL"],
  },
  {
    title: "カラー",
    options: ["ブラック", "ホワイト", "グレー", "ベージュ", "ブルー", "レッド"],
  },
  {
    title: "価格",
    options: ["¥5,000以下", "¥5,000 - ¥10,000", "¥10,000 - ¥20,000", "¥20,000以上"],
  },
]

export default function ProductFilters() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(filterSections.map((section) => [section.title, true])),
  )

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="font-bold text-lg">フィルター</h2>

      {filterSections.map((section) => (
        <div key={section.title} className="border-b border-gray-200 pb-6">
          <button
            className="flex w-full items-center justify-between py-2 text-left font-medium"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openSections[section.title] ? "rotate-180" : ""}`}
            />
          </button>

          {openSections[section.title] && (
            <div className="mt-2 space-y-2">
              {section.options.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label htmlFor={option} className="ml-2 text-sm text-gray-600">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <button className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
        フィルターを適用
      </button>
    </div>
  )
}
