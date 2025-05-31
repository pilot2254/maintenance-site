/**
 * Maintenance Site Configuration
 *
 * Edit this file to customize your maintenance page.
 * All settings are static-friendly and work with any hosting provider.
 */

export const maintenanceConfig = {
  // Company Information
  company: {
    name: "RedFox Studios",
    website: "", // Set to empty string or remove to hide "Visit Our Site" button - But this will be useless since this is a maintenance page
    email: "support@redfox-studios.org", // Optional: Support email
  },

  // Maintenance Settings
  maintenance: {
    // When maintenance will end (ISO format)
    // Example: "2025-08-10T12:00:00Z"
    endDate: "2025-08-10T12:00:00Z",

    // Main heading
    title: "We'll be back soon!",

    // Description text
    description:
      "We're currently performing scheduled maintenance to improve your experience. Thank you for your patience.",

    // Additional message (optional) - Set to empty or remove to hide
    additionalMessage: "",
  },

  // Visual Settings
  appearance: {
    // Show countdown timer
    showCountdown: true,

    // Show theme toggle (dark/light mode)
    showThemeToggle: true,

    // Logo settings
    logo: {
      show: false,
      fallbackText: "", // Text shown in logo
    },
  },

  // Social Media Links (optional - remove or leave empty to hide a specific link)
  social: {
    twitter: "https://twitter.com/pilot2254",
    github: "https://github.com/redfox-studios",
    youtube: "https://www.youtube.com/channel/UCuDrdYxaF5p-4X1Gmx-0FuQ",
    bluesky: "https://bsky.app/profile/redfox-studios.org",
    kofi: "https://ko-fi.com/pilot2254",
    paypal: "https://paypal.me/pilot2254",
    // linkedin: "https://linkedin.com/company/weDontHaveLinkedInYet", // Uncomment to add LinkedIn
  },
} as const

export type MaintenanceConfig = typeof maintenanceConfig
