import type React from "react"
import type { Metadata } from "next"
// Remove Inter, import GeistSans and GeistMono
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

// Remove Inter instantiation

export const metadata: Metadata = {
  title: "Under Maintenance | RedFox Studios",
  description: "We're currently performing scheduled maintenance. We'll be back soon!",
  robots: "noindex, nofollow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(0 0% 100%)" }, // Updated to pure white for light
    { media: "(prefers-color-scheme: dark)", color: "hsl(240 10% 2.5%)" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      // Apply Geist Sans and Geist Mono CSS variables to the html tag
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // font-sans will now pick up Geist Sans from Tailwind config
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
