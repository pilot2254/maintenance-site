"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Until the component is mounted, we can't know the theme, so render a placeholder or null.
  // This prevents hydration mismatch.
  if (!mounted) {
    // Render a simple div as a placeholder to maintain layout space
    return <div className="w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 animate-pulse"></div>
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-9 h-9 border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.1rem] w-[1.1rem] transition-all" />
      ) : (
        <Moon className="h-[1.1rem] w-[1.1rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
