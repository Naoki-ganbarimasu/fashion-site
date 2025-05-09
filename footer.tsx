import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MODA</h3>
            <p className="text-sm text-gray-600 mb-4">最新のファッショントレンドとスタイルを提供するオンラインストア</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">ショッピング</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-black">
                  すべての商品
                </Link>
              </li>
              <li>
                <Link href="/products?category=women" className="text-gray-600 hover:text-black">
                  レディース
                </Link>
              </li>
              <li>
                <Link href="/products?category=men" className="text-gray-600 hover:text-black">
                  メンズ
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-gray-600 hover:text-black">
                  アクセサリー
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-600 hover:text-black">
                  セール
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">お客様サポート</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black">
                  配送について
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-black">
                  返品・交換
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-black">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-black">
                  サイズガイド
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} MODA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
