"use client";

import type React from "react";

import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { RatingStars } from "@/components/ui/rating-stars";

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
}

export function ProductReviews({ rating, reviewCount }: ProductReviewsProps) {
  const [reviewText, setReviewText] = useState("");
  const [userRating, setUserRating] = useState(0);

  // Mock reviews data - in a real app, this would come from an API
  const reviews = [
    {
      id: "1",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      rating: 5,
      date: "2023-10-15",
      title: "Excellent quality and fit",
      content:
        "I'm really impressed with the quality of this shirt. The fabric is soft yet durable, and the fit is perfect. I've already ordered another one in a different color.",
      helpful: 12,
      unhelpful: 2
    },
    {
      id: "2",
      user: {
        name: "Sam Taylor",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      rating: 4,
      date: "2023-09-28",
      title: "Great shirt, slightly large",
      content:
        "The quality is excellent and the material feels premium. My only issue is that it runs slightly large. I'd recommend sizing down if you're between sizes.",
      helpful: 8,
      unhelpful: 1
    },
    {
      id: "3",
      user: {
        name: "Jamie Smith",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      rating: 3,
      date: "2023-09-10",
      title: "Good but not great",
      content:
        "The shirt is decent quality, but I expected better for the price. The color is also slightly different from what's shown in the photos.",
      helpful: 5,
      unhelpful: 3
    }
  ];

  // Calculate rating distribution
  const ratingDistribution = [
    { stars: 5, percentage: 65 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the review to an API
    alert(`Review submitted: ${userRating} stars, "${reviewText}"`);
    setReviewText("");
    setUserRating(0);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl font-bold">{rating.toFixed(1)}</div>
            <div>
              <RatingStars rating={rating} size="md" />
              <p className="text-sm text-muted-foreground">
                Based on {reviewCount} reviews
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="w-12 text-sm">{item.stars} stars</div>
                <Progress value={item.percentage} className="h-2 flex-1" />
                <div className="w-8 text-sm text-right">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <div className="text-sm mb-2">Your Rating</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <button
                    title="Rate this product"
                    key={i}
                    type="button"
                    onClick={() => setUserRating(i + 1)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        i < userRating
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Textarea
                placeholder="Share your thoughts about this product..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={userRating === 0 || !reviewText.trim()}
            >
              Submit Review
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-lg font-semibold mb-6">Recent Reviews</h3>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={review.user.avatar}
                      alt={review.user.name}
                    />
                    <AvatarFallback>
                      {review.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.user.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.date}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <RatingStars rating={review.rating} size="sm" />
                </div>
              </div>

              <h4 className="font-medium mb-2">{review.title}</h4>
              <p className="text-muted-foreground mb-4">{review.content}</p>

              <div className="flex items-center gap-4">
                <span className="text-sm">Was this review helpful?</span>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful}</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ThumbsDown className="h-4 w-4" />
                  <span>{review.unhelpful}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
