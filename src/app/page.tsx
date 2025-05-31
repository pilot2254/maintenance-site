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
    .filter(([, urlValue]) => urlValue) // Explicitly name urlValue, key is unused
    .map(([platformName, urlValue]) => ({
      name: capitalize(platformName),
      url: urlValue as string,
    }))

  return (
    // This div will now use the CSS variable --background, which changes with the theme.
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        {" "}
        {/* Use border-border */}
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary text-primary-foreground rounded-md flex items-center justify-center">
              <span className="font-bold text-xs">{appearance.logo.fallbackText}</span>
            </div>
            <span className="font-medium text-foreground">{company.name}</span> {/* Use text-foreground */}
          </div>
          {appearance.showThemeToggle && <ThemeToggle />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="space-y-10">
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center border border-border">
                <Settings2 className="w-7 h-7" /> {/* Icon color will be inherited or use text-muted-foreground */}
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{maintenance.title}</h1>
              <p className="text-base md:text-lg text-muted-foreground">{maintenance.description}</p>
            </div>

            {appearance.showCountdown && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">We expect to be back online in approximately:</p>
                <CountdownTimer targetDate={maintenanceEndDate} />
              </div>
            )}

            <div className="space-y-8 pt-6">
              {maintenance.additionalMessage && (
                <p className="text-sm text-muted-foreground">{maintenance.additionalMessage}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {company.email && (
                  <Button // Button component uses its own variants which use CSS vars
                    variant="default" // Relies on primary, primary-foreground
                    size="lg"
                    asChild
                  >
                    <a href={`mailto:${company.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Support
                    </a>
                  </Button>
                )}
              </div>

              {socialLinks.length > 0 && (
                <div className="pt-6 border-t border-border">
                  {/* Removed space-y-3 and the <p> tag */}
                  <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mt-3">
                    {" "}
                    {/* Added mt-3 for spacing if needed */}
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
