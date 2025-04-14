"use client"

import { Card, CardContent } from "@/components/ui/card"
import CountdownTimer from "@/components/countdown-timer"
import { ThemeToggle } from "@/components/theme-toggle"
import { config } from "@/lib/config"
import Image from "next/image"

interface MaintenancePageProps {
  endDate: Date
}

export default function MaintenancePage({ endDate }: MaintenancePageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <Card className="mx-auto w-full max-w-md border-border/30 bg-background/80 backdrop-blur-md">
        <CardContent className="flex flex-col items-center space-y-6 pt-6">
          <Image src={config.logoSrc || "/placeholder.svg"} alt="Logo" width={120} height={40} className="h-8 w-auto" />

          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">{config.title}</h1>
            <p className="text-muted-foreground">{config.description}</p>
          </div>

          <div className="w-full rounded-lg border p-4">
            <p className="mb-3 text-center text-sm text-muted-foreground">We'll be back online in:</p>
            <CountdownTimer endDate={endDate} />
          </div>

          {config.contactEmail && (
            <div className="text-center text-sm text-muted-foreground">
              Need help?{" "}
              <a href={`mailto:${config.contactEmail}`} className="font-medium text-primary hover:underline">
                Contact our team
              </a>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="absolute bottom-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {config.companyName}
      </div>
    </div>
  )
}