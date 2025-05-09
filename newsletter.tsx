"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここでニュースレター登録処理を実装
    alert(`${email}をニュースレターに登録しました！`)
    setEmail("")
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">ニュースレターに登録する</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        最新のトレンド、新商品情報、限定オファーを受け取りましょう。
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="メールアドレスを入力"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          登録する <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
