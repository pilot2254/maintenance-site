import { CountdownTimer } from "@/components/countdown-timer"
import { ThemeToggle } from "@/components/theme-toggle"
import { maintenanceConfig } from "@/components/maintenance-config"
import { Button } from "@/components/ui/button"
import { Mail, Settings2 } from "lucide-react"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export default function MaintenancePage() {
  const { company, maintenance, appearance, social } = maintenanceConfig
  const maintenanceEndDate = new Date(maintenance.endDate)

  const socialLinks = Object.entries(social)
    .filter(([, urlValue]) => urlValue)
    .map(([platformName, urlValue]) => ({
      name: capitalize(platformName),
      url: urlValue as string,
    }))

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary text-primary-foreground rounded-md flex items-center justify-center">
              <span className="font-bold text-xs">{appearance.logo.fallbackText}</span>
            </div>
            <span className="font-medium text-foreground">{company.name}</span>
          </div>
          {appearance.showThemeToggle && <ThemeToggle />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center py-12 md:py-20">
        {" "}
        {/* Added more vertical padding to main */}
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="space-y-8 md:space-y-10">
            {" "}
            {/* Adjusted main content spacing */}
            {/* Status Icon */}
            <div className="flex justify-center">
              {/* Simplified icon presentation, made icon slightly larger */}
              <Settings2 className="w-10 h-10 text-muted-foreground" />
            </div>
            {/* Main Message */}
            <div className="space-y-4">
              {" "}
              {/* Increased spacing around title */}
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">{maintenance.title}</h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {" "}
                {/* Added leading-relaxed */}
                {maintenance.description}
              </p>
            </div>
            {/* Countdown */}
            {appearance.showCountdown && (
              <div className="space-y-3 pt-2">
                {" "}
                {/* Adjusted spacing */}
                <p className="text-sm text-muted-foreground/80">
                  {" "}
                  {/* Made text slightly more muted */}
                  We expect to be back online in approximately:
                </p>
                <CountdownTimer targetDate={maintenanceEndDate} />
              </div>
            )}
            {/* Actions & Links */}
            <div className="space-y-8 pt-6 md:pt-8">
              {" "}
              {/* Increased top padding */}
              {maintenance.additionalMessage && (
                <p className="text-sm text-muted-foreground">{maintenance.additionalMessage}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {company.email && (
                  <Button variant="default" size="lg" asChild>
                    <a href={`mailto:${company.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Support
                    </a>
                  </Button>
                )}
              </div>
              {socialLinks.length > 0 && (
                <div className="pt-8 border-t border-border">
                  {" "}
                  {/* Increased top padding */}
                  <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
                    {" "}
                    {/* Increased gap-y */}
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
