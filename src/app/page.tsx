import { ThemeToggle } from "@/components/theme-toggle"
import { TimeRemaining } from "@/components/time-remaining"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings } from 'lucide-react'
import Link from "next/link"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen w-full dark:bg-zinc-950">
      {/* Header with theme toggle */}
      <header className="fixed top-0 right-0 p-4">
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4">
        <Card className="relative overflow-hidden border-none bg-transparent shadow-none">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Status indicator */}
            <div className="flex items-center space-x-2 rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-500">
              <Settings className="h-4 w-4 animate-spin [transform-style:preserve-3d] [backface-visibility:hidden]" />
              <span className="text-sm font-medium">Maintenance in Progress</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              We&apos;ll be back soon
            </h1>

            {/* Description */}
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We&apos;re currently performing scheduled maintenance to improve our
              services. We apologize for any inconvenience this may cause.
            </p>

            {/* Dynamic time remaining */}
            <TimeRemaining />

            {/* Action buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="default">
                <Link href="/status">View System Status</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/why">Why are we down?</Link>
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}