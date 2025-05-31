import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils" // For conditionally applying classes

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }) // Add variable for Tailwind

export const metadata: Metadata = {
  title: "Under Maintenance - RedFox Studios",
  description: "We're currently performing scheduled maintenance. We'll be back soon!",
  robots: "noindex, nofollow",
  themeColor: [
    // Best practice for theme colors
    { media: "(prefers-color-scheme: light)", color: "hsl(240 5.9% 97.3%)" }, // zinc-50
    { media: "(prefers-color-scheme: dark)", color: "hsl(240 10% 2.5%)" }, // zinc-950
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", // Use bg-background from CSS vars
          inter.variable, // Apply font variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false} // Explicitly disable system preference to ensure defaultTheme takes precedence
          disableTransitionOnChange // Helps prevent flashes during theme changes
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
