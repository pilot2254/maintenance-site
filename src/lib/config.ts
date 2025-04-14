// Central configuration for the maintenance page
export const config = {
    title: "We're making things better",
    description: "Our site is currently undergoing scheduled maintenance. We'll be back with a fresh new look.",
    logoSrc: "/vercel.svg",
    contactEmail: "support@redfox-studios.org",
    companyName: "RedFox Studios",
    // Maintenance end date: August 10, 2025
    maintenanceEndDate: new Date("2025-08-10T00:00:00Z"),
  
    // Customize these values to change the appearance
    appearance: {
      backgroundPattern: "gradient", // 'gradient', 'dots', 'grid', or 'none'
      accentColor: "zinc", // Uses the theme's primary color
    },
  }