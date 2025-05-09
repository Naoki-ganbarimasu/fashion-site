export const products = [
  {
    id: "1",
    name: "カジュアルコットンTシャツ",
    price: 2999,
    image: "/placeholder.svg?height=400&width=300",
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "トップス",
    colors: ["黒", "白", "グレー"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 128,
    description:
      "100%オーガニックコットンを使用した快適なカジュアルTシャツ。リラックスフィットで柔らかな肌触りが特徴です。",
    details: ["100%オーガニックコットン", "レギュラーフィット", "クルーネック", "洗濯機で洗えます", "輸入品"],
    inStock: true,
  },
  {
    id: "2",
    name: "スリムフィットジーンズ",
    price: 5999,
    image: "/placeholder.svg?height=400&width=300",
    category: "ボトムス",
    colors: ["ブルー", "黒"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.2,
    reviews: 95,
    inStock: true,
  },
  {
    id: "3",
    name: "レザージャケット",
    price: 19999,
    image: "/placeholder.svg?height=400&width=300",
    category: "アウター",
    colors: ["ブラウン", "黒"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 42,
    inStock: true,
  },
  {
    id: "4",
    name: "サマードレス",
    price: 7999,
    image: "/placeholder.svg?height=400&width=300",
    category: "ドレス",
    colors: ["レッド", "ブルー", "フローラル"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 67,
    inStock: true,
  },
  {
    id: "5",
    name: "クラシックオックスフォードシャツ",
    price: 4999,
    image: "/placeholder.svg?height=400&width=300",
    category: "トップス",
    colors: ["白", "ブルー", "ピンク"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.4,
    reviews: 103,
    inStock: true,
  },
  {
    id: "6",
    name: "ウールセーター",
    price: 8999,
    image: "/placeholder.svg?height=400&width=300",
    category: "トップス",
    colors: ["ネイビー", "バーガンディ", "グリーン"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.3,
    reviews: 78,
    inStock: true,
  },
]

export const reviews = [
  {
    id: "1",
    user: {
      name: "田中 太郎",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2023年10月15日",
    title: "素晴らしい品質とフィット感",
    content:
      "このシャツの品質に本当に感動しました。生地は柔らかくて丈夫で、フィット感も完璧です。すでに別の色も注文しました。",
    helpful: 12,
    unhelpful: 2,
  },
  {
    id: "2",
    user: {
      name: "佐藤 花子",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    date: "2023年9月28日",
    title: "良いシャツですが、少し大きめ",
    content:
      "品質は素晴らしく、素材も高級感があります。唯一の問題は、少し大きめのサイズ感です。サイズ選びに迷っている方は、ワンサイズ下をお勧めします。",
    helpful: 8,
    unhelpful: 1,
  },
  {
    id: "3",
    user: {
      name: "鈴木 一郎",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 3,
    date: "2023年9月10日",
    title: "まあまあですが期待ほどではない",
    content:
      "シャツの品質は悪くないですが、この価格帯ではもう少し良いものを期待していました。また、写真で見たものと色が少し異なります。",
    helpful: 5,
    unhelpful: 3,
  },
]

export const categories = ["トップス", "ボトムス", "アウター", "ドレス", "アクセサリー"]
export const colors = [
  "黒",
  "白",
  "グレー",
  "ブルー",
  "レッド",
  "ブラウン",
  "ネイビー",
  "バーガンディ",
  "グリーン",
  "ピンク",
  "フローラル",
]
export const sizes = ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36"]

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(currentProductId: string) {
  return products.filter((product) => product.id !== currentProductId).slice(0, 4)
}
