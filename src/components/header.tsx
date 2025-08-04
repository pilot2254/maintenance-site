import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold">{siteConfig.name}</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}