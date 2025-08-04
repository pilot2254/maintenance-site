export const siteConfig = {
  name: "Maintenance Mode",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  maintenanceEnd: "2025-02-01T12:00:00Z", // ISO string format
  messages: {
    title: "We'll be back soon!",
    subtitle: "Sorry for the inconvenience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    footerText: "All Rights Reserved"
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