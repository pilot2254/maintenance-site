import { type Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { URL } from 'url';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Site Maintenance",
    template: "%s | Site Maintenance"
  },
  description: "We're currently performing scheduled maintenance to improve our services. We'll be back online soon.",
  keywords: ["maintenance", "system update", "website maintenance", "scheduled maintenance", "system upgrade"],
  authors: [{ name: "RedFox Studios" }],
  openGraph: {
    title: "Site Maintenance",
    description: "We're currently performing scheduled maintenance to improve our services. We'll be back online soon.",
    type: "website",
    siteName: "RedFox Studios",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://redfox-studios.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}