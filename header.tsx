"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            MODA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium hover:text-gray-500">
              すべての商品
            </Link>
            <Link href="/products?category=women" className="text-sm font-medium hover:text-gray-500">
              レディース
            </Link>
            <Link href="/products?category=men" className="text-sm font-medium hover:text-gray-500">
              メンズ
            </Link>
            <Link href="/products?category=accessories" className="text-sm font-medium hover:text-gray-500">
              アクセサリー
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-black">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-black">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-black">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-black">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-black md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button className="p-2 text-gray-500 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-8">
            <Link href="/products" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              すべての商品
            </Link>
            <Link href="/products?category=women" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              レディース
            </Link>
            <Link href="/products?category=men" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              メンズ
            </Link>
            <Link
              href="/products?category=accessories"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              アクセサリー
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
