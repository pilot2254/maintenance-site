import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, Server, Database, Globe, Cpu, Cloud } from 'lucide-react'
import Link from "next/link"
import { TimeRemaining } from "@/components/time-remaining"

// Status indicator component
function StatusIndicator({ status }: { status: "operational" | "maintenance" | "degraded" }) {
  const statusConfig = {
    operational: {
      icon: CheckCircle2,
      text: "Operational",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    maintenance: {
      icon: AlertCircle,
      text: "Maintenance",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    degraded: {
      icon: XCircle,
      text: "Degraded",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className={`flex items-center gap-2 rounded-full ${config.bg} px-3 py-1.5 ${config.color}`}>
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{config.text}</span>
    </div>
  )
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export default function StatusPage() {
  return (
    <div className="min-h-screen w-full dark:bg-zinc-950">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to maintenance page
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Hero section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">System Status</h1>
              <p className="text-xl text-muted-foreground">
                Current status of our system components and services
              </p>
            </div>
            <TimeRemaining />
          </div>

          <Separator className="my-8" />

          {/* Overall status */}
          <Card>
            <CardHeader>
              <CardTitle>Overall System Status</CardTitle>
              <CardDescription>Current status of our entire platform</CardDescription>
            </CardHeader>
            <CardContent>
              <StatusIndicator status="maintenance" />
            </CardContent>
          </Card>

          {/* Components status */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Component Status</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      API Servers
                    </div>
                  </CardTitle>
                  <StatusIndicator status="maintenance" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Upgrading server infrastructure
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-muted-foreground" />
                      Database
                    </div>
                  </CardTitle>
                  <StatusIndicator status="maintenance" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Performing database optimization
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      CDN
                    </div>
                  </CardTitle>
                  <StatusIndicator status="degraded" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Limited functionality during updates
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-muted-foreground" />
                      Storage
                    </div>
                  </CardTitle>
                  <StatusIndicator status="operational" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Operating normally
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Incident updates */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Updates</h2>
            <div className="space-y-4">

            <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>Website Shut Down</CardTitle>
                      <CardDescription>Website rebuild in progress</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(new Date(2025, 1, 1,))} {/* December 21, 2024 12:00 AM */}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The Content of redfox-studios.org was replaced with the maintenance pages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>Maintenance Started</CardTitle>
                      <CardDescription>Scheduled system-wide maintenance began</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(new Date(2024, 11, 21, 11, 30))} {/* December 21, 2024 9:30 AM */}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our team has begun the scheduled maintenance to upgrade our infrastructure
                    and improve system performance. All core services are affected during this period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>Database Optimization</CardTitle>
                      <CardDescription>Database maintenance in progress</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(new Date(2024, 11, 21, 10, 15))} {/* December 21, 2024 10:15 AM */}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Database optimization and upgrades are currently in progress. This will
                    improve query performance and system reliability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}