import { siteConfig } from "@/config/site"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="container flex h-16 items-center justify-center px-4 max-w-7xl mx-auto">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {siteConfig.messages.footerText}
        </p>
      </div>
    </footer>
  )
}