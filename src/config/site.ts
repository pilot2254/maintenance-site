export const siteConfig = {
  name: "RedFox Studios",
  description: "Sorry for the inconvenience, we are currently undergoing maintenance.",
  maintenanceEnd: "2026-01-01T12:00:00Z", // ISO string format - 2026-01-01 at 12:00 UTC
  messages: {
    title: "We'll be back soon!",
    subtitle: "Sorry for the inconvenience",
    description: "We know it's been a year, but please understand that this website is run by two students with busy schedules who are happy if they can find time for themselves.",
    footerText: "RedFox Studios. All Rights Reserved"
  },
  countdown: {
    labels: {
      days: "Days",
      hours: "Hours", 
      minutes: "Minutes",
      seconds: "Seconds"
    }
  }
} as const