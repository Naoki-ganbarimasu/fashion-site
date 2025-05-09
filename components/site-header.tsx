import Link from "next/link"
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニュー</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                ホーム
              </Link>
              <Link href="/" className="text-lg font-medium">
                新着商品
              </Link>
              <Link href="/" className="text-lg font-medium">
                レディース
              </Link>
              <Link href="/" className="text-lg font-medium">
                メンズ
              </Link>
              <Link href="/" className="text-lg font-medium">
                アクセサリー
              </Link>
              <Link href="/" className="text-lg font-medium">
                セール
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">FASHION</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            ホーム
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground/80">
            新着商品
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground/80">
            レディース
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground/80">
            メンズ
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground/80">
            アクセサリー
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground/80">
            セール
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="商品を検索..." className="pl-8 w-[200px] lg:w-[300px]" />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <span className="sr-only">お気に入り</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">カート</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              2
            </span>
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">アカウント</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
