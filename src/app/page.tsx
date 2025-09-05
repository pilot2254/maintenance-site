import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site"
import dynamic from "next/dynamic"

const Countdown = dynamic(() => import("@/components/countdown").then(mod => ({ default: mod.Countdown })), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center max-w-2xl mx-auto">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="text-3xl sm:text-4xl font-bold tabular-nums">--</div>
          <div className="text-sm sm:text-base text-muted-foreground mt-2">Loading</div>
        </div>
      ))}
    </div>
  )
})

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.messages.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {siteConfig.messages.subtitle}
            </p>
          </div>
          
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {siteConfig.messages.description}
            </p>
            
            <Countdown />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );

}