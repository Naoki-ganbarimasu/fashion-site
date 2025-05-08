"use client"

import type React from "react"
import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { RatingStars } from "@/components/ui/rating-stars"
import { reviews, ratingDistribution } from "@/lib/product-data"

interface ProductReviewsProps {
  productId: string
  rating: number
  reviewCount: number
  onReviewSubmit?: (rating: number, text: string) => void
}

export function ProductReviews({ productId, rating, reviewCount, onReviewSubmit }: ProductReviewsProps) {
  const [reviewText, setReviewText] = useState("")
  const [userRating, setUserRating] = useState(0)
  const [helpfulClicks, setHelpfulClicks] = useState<Record<string, "helpful" | "unhelpful" | null>>({})

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (onReviewSubmit) {
      onReviewSubmit(userRating, reviewText)
    } else {
      // フォールバック処理
      alert(`レビューを送信しました: ${userRating}星, "${reviewText}"`)
    }
    setReviewText("")
    setUserRating(0)
  }

  const handleHelpfulClick = (reviewId: string, type: "helpful" | "unhelpful") => {
    setHelpfulClicks((prev) => {
      // すでに同じボタンがクリックされている場合は取り消し
      if (prev[reviewId] === type) {
        const newState = { ...prev }
        delete newState[reviewId]
        return newState
      }
      // 新しい評価を設定
      return { ...prev, [reviewId]: type }
    })
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">カスタマーレビュー</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl font-bold">{rating.toFixed(1)}</div>
            <div>
              <RatingStars rating={rating} size="md" />
              <p className="text-sm text-muted-foreground">{reviewCount}件のレビュー</p>
            </div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="w-12 text-sm">{item.stars}星</div>
                <Progress value={item.percentage} className="h-2 flex-1" />
                <div className="w-8 text-sm text-right">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">レビューを書く</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <div className="text-sm mb-2">評価</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <button key={i} type="button" onClick={() => setUserRating(i + 1)} className="focus:outline-none">
                    <Star
                      className={`h-6 w-6 ${
                        i < userRating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Textarea
                placeholder="この商品についての感想を共有してください..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <Button type="submit" disabled={userRating === 0 || !reviewText.trim()}>
              レビューを投稿
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-lg font-semibold mb-6">最近のレビュー</h3>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                    <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.user.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </div>
                <div className="flex">
                  <RatingStars rating={review.rating} size="sm" />
                </div>
              </div>

              <h4 className="font-medium mb-2">{review.title}</h4>
              <p className="text-muted-foreground mb-4">{review.content}</p>

              <div className="flex items-center gap-4">
                <span className="text-sm">このレビューは参考になりましたか？</span>
                <Button
                  variant={helpfulClicks[review.id] === "helpful" ? "default" : "outline"}
                  size="sm"
                  className="h-8 gap-1"
                  onClick={() => handleHelpfulClick(review.id, "helpful")}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful + (helpfulClicks[review.id] === "helpful" ? 1 : 0)}</span>
                </Button>
                <Button
                  variant={helpfulClicks[review.id] === "unhelpful" ? "default" : "outline"}
                  size="sm"
                  className="h-8 gap-1"
                  onClick={() => handleHelpfulClick(review.id, "unhelpful")}
                >
                  <ThumbsDown className="h-4 w-4" />
                  <span>{review.unhelpful + (helpfulClicks[review.id] === "unhelpful" ? 1 : 0)}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
