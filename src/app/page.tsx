import { CountdownTimer } from "@/components/countdown-timer"
import { ThemeToggle } from "@/components/theme-toggle"
import { maintenanceConfig } from "@/components/maintenance-config"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, Settings2 } from "lucide-react"

// Helper function to capitalize first letter for display
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export default function MaintenancePage() {
  const { company, maintenance, appearance, social } = maintenanceConfig
  const maintenanceEndDate = new Date(maintenance.endDate)

  // Filter and prepare social links for rendering
  const socialLinks = Object.entries(social)
    .filter(([_, url]) => url) // Ensure URL is not empty
    .map(([platform, url]) => ({
      name: capitalize(platform),
      url: url as string, // Type assertion as we've filtered out empty ones
    }))

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-zinc-900 dark:bg-zinc-100 rounded-md flex items-center justify-center">
              <span className="text-zinc-100 dark:text-zinc-900 font-bold text-xs">{appearance.logo.fallbackText}</span>
            </div>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">{company.name}</span>
          </div>
          {appearance.showThemeToggle && <ThemeToggle />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="space-y-10">
            {/* Status Icon */}
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                <Settings2 className="w-7 h-7 text-zinc-500 dark:text-zinc-400" />
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {maintenance.title}
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">{maintenance.description}</p>
            </div>

            {/* Countdown */}
            {appearance.showCountdown && (
              <div className="space-y-4">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  We expect to be back online in approximately:
                </p>
                <CountdownTimer targetDate={maintenanceEndDate} />
              </div>
            )}

            {/* Actions & Links */}
            <div className="space-y-8 pt-6">
              {maintenance.additionalMessage && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{maintenance.additionalMessage}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {company.email && (
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    asChild
                  >
                    <a href={`mailto:${company.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Support
                    </a>
                  </Button>
                )}
                {company.website && ( // This button will now be hidden as company.website is empty in config
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
                    asChild
                  >
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Our Site
                    </a>
                  </Button>
                )}
              </div>

              {socialLinks.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Find us on:</p>
                  <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
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
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
