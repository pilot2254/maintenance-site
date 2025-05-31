import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Frown } from "lucide-react" // Using Frown for a softer "oops" feel
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | RedFox Studios",
  description: "The page you are looking for could not be found.",
  robots: "noindex, nofollow",
}

export default function NotFoundPage() {
  return (
    // RootLayout provides the overall page structure (header, footer, theme)
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
      <div className="max-w-lg w-full space-y-8">
        {/* Optional: A very large, subtle "404" as a background element or a simple icon */}
        {/* For a cleaner look, we can use a more subtle icon or just text */}
        <div className="flex justify-center">
          <Frown className="w-16 h-16 text-muted-foreground/70" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Page Not Found</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Sorry, we couldn't find the page you were looking for. It might have been moved, deleted, or perhaps the URL
            was mistyped.
          </p>
        </div>

        <div className="pt-4">
          {" "}
          {/* Added some space before the button */}
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
