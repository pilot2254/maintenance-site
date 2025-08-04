import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Countdown } from "@/components/countdown"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto text-center space-y-12">
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
