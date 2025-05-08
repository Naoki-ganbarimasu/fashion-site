// 共通の型定義をまとめたファイル

export interface Product {
  id: string
  name: string
  price: number
  image: string
  images?: string[]
  category: string
  colors: string[]
  sizes: string[]
  rating: number
  reviews: number
  description?: string
  details?: string[]
  inStock?: boolean
}

export interface Review {
  id: string
  user: {
    name: string
    avatar: string
  }
  rating: number
  date: string
  title: string
  content: string
  helpful: number
  unhelpful: number
}

export interface RatingDistribution {
  stars: number
  percentage: number
}

export type ProductCategory = "tops" | "bottoms" | "outerwear" | "dresses" | "accessories"
export type ProductColor =
  | "black"
  | "white"
  | "gray"
  | "blue"
  | "red"
  | "brown"
  | "navy"
  | "burgundy"
  | "green"
  | "pink"
  | "floral"
export type ProductSize = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "28" | "30" | "32" | "34" | "36"
