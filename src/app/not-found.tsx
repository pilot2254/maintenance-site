import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileQuestion, Home, MoveLeft, MoveRight, Search } from 'lucide-react'
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen w-full dark:bg-zinc-950">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-end">
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4">
        <Card className="relative overflow-hidden border-none bg-transparent shadow-none">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Error code */}
            <div className="relative">
              <div className="text-[10rem] font-bold leading-none tracking-tighter text-muted/20 select-none">
                404
              </div>
              <Search className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" 
                aria-hidden="true" />
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Page not found
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, 
                or might be temporarily unavailable during maintenance.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Back to maintenance page
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/why" className="gap-2">
                  <FileQuestion className="h-4 w-4" />
                  Why are we down?
                </Link>
              </Button>
            </div>

            {/* Additional help */}
            <div className="rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
              <p>
                Need immediate assistance? Contact us at{" "}
                <a href="mailto:support@example.com" className="text-primary hover:underline">
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}