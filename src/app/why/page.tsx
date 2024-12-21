import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Server, Shield, Zap, Clock } from 'lucide-react'
import Link from "next/link"
import { TimeRemaining } from "@/components/time-remaining"

export default function WhyPage() {
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
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              Why We're Under Maintenance
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We're making significant improvements to our infrastructure to provide you with a faster, 
              more secure, and more reliable service.
            </p>
            <TimeRemaining />
          </div>

          <Separator className="my-8" />

          {/* Main improvements grid */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="relative overflow-hidden">
              <CardHeader className="space-y-6 pb-4">
                <div className="flex items-start justify-between">
                  <Server className="h-8 w-8 text-primary" />
                  <span className="text-sm text-muted-foreground">01</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Infrastructure Upgrade</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive system upgrades to enhance performance and reliability.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    • New distributed server architecture
                  </li>
                  <li className="flex items-center gap-2">
                    • Advanced database optimization
                  </li>
                  <li className="flex items-center gap-2">
                    • Enhanced storage solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="space-y-6 pb-4">
                <div className="flex items-start justify-between">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-sm text-muted-foreground">02</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Security Enhancements</CardTitle>
                  <CardDescription className="text-base">
                    Implementation of state-of-the-art security measures.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    • Advanced encryption protocols
                  </li>
                  <li className="flex items-center gap-2">
                    • Enhanced firewall systems
                  </li>
                  <li className="flex items-center gap-2">
                    • Real-time threat monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden md:col-span-2">
              <CardHeader className="space-y-6 pb-4">
                <div className="flex items-start justify-between">
                  <Zap className="h-8 w-8 text-primary" />
                  <span className="text-sm text-muted-foreground">03</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Performance Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive improvements for a better user experience.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    • Global CDN implementation
                  </li>
                  <li className="flex items-center gap-2">
                    • Advanced caching system
                  </li>
                  <li className="flex items-center gap-2">
                    • API response optimization
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    • Load balancing improvements
                  </li>
                  <li className="flex items-center gap-2">
                    • Resource compression
                  </li>
                  <li className="flex items-center gap-2">
                    • Database query optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact section */}
          <Card className="border-none bg-muted/50 shadow-none">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Clock className="h-6 w-6 text-muted-foreground" />
              <div className="text-center">
                <h2 className="font-semibold">Need Immediate Assistance?</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  For urgent matters, reach out to our support team at{" "}
                  <a href="mailto:support@redfox-studios.org" className="text-primary hover:underline">
                    support@redfox-studios.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}