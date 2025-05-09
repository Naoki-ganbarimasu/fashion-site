// 商品データを管理するファイル
import type { Product, Review, RatingDistribution } from "@/types"

// 商品データ
export const products: Product[] = [
  {
    id: "1",
    name: "Casual Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "tops",
    colors: ["black", "white", "gray"],
    sizes: ["xs", "s", "m", "l", "xl"],
    rating: 4.5,
    reviews: 128,
    description:
      "A comfortable, casual t-shirt made from 100% organic cotton. Perfect for everyday wear with a relaxed fit and soft feel.",
    details: ["100% organic cotton", "Regular fit", "Crew neck", "Machine washable", "Imported"],
    inStock: true,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "bottoms",
    colors: ["blue", "black"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.2,
    reviews: 95,
  },
  {
    id: "3",
    name: "Leather Jacket",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "outerwear",
    colors: ["brown", "black"],
    sizes: ["s", "m", "l", "xl"],
    rating: 4.8,
    reviews: 42,
  },
  {
    id: "4",
    name: "Summer Dress",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "dresses",
    colors: ["red", "blue", "floral"],
    sizes: ["xs", "s", "m", "l"],
    rating: 4.6,
    reviews: 67,
  },
  {
    id: "5",
    name: "Classic Oxford Shirt",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "tops",
    colors: ["white", "blue", "pink"],
    sizes: ["s", "m", "l", "xl", "xxl"],
    rating: 4.4,
    reviews: 103,
  },
  {
    id: "6",
    name: "Wool Sweater",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "tops",
    colors: ["navy", "burgundy", "green"],
    sizes: ["s", "m", "l", "xl"],
    rating: 4.3,
    reviews: 78,
  },
]

// レビューデータ
export const reviews: Review[] = [
  {
    id: "1",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2023-10-15",
    title: "Excellent quality and fit",
    content:
      "I'm really impressed with the quality of this shirt. The fabric is soft yet durable, and the fit is perfect. I've already ordered another one in a different color.",
    helpful: 12,
    unhelpful: 2,
  },
  {
    id: "2",
    user: {
      name: "Sam Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    date: "2023-09-28",
    title: "Great shirt, slightly large",
    content:
      "The quality is excellent and the material feels premium. My only issue is that it runs slightly large. I'd recommend sizing down if you're between sizes.",
    helpful: 8,
    unhelpful: 1,
  },
  {
    id: "3",
    user: {
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 3,
    date: "2023-09-10",
    title: "Good but not great",
    content:
      "The shirt is decent quality, but I expected better for the price. The color is also slightly different from what's shown in the photos.",
    helpful: 5,
    unhelpful: 3,
  },
]

// 評価分布データ
export const ratingDistribution: RatingDistribution[] = [
  { stars: 5, percentage: 65 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 10 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
]

// 商品を取得する関数
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// 関連商品を取得する関数
export function getRelatedProducts(currentProductId: string, category: string): Product[] {
  return products.filter((product) => product.id !== currentProductId).slice(0, 4)
}

// カテゴリー、色、サイズのリスト
export const categories = ["tops", "bottoms", "outerwear", "dresses", "accessories"]
export const colors = ["black", "white", "gray", "blue", "red", "brown", "navy", "burgundy", "green", "pink", "floral"]
export const sizes = ["xs", "s", "m", "l", "xl", "xxl", "28", "30", "32", "34", "36"]
