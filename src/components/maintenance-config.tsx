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
    website: "", // Set to empty string or remove to hide "Visit Our Site" button
    email: "hello@redfoxstudios.com", // Optional: Support email
  },

  // Maintenance Settings
  maintenance: {
    // When maintenance will end (ISO format)
    // Example: "2024-12-31T23:59:59Z"
    endDate: "2024-12-31T23:59:59Z",

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
      show: true,
      fallbackText: "RF", // Text shown in logo
    },
  },

  // Social Media Links (optional - remove or leave empty to hide a specific link)
  social: {
    twitter: "https://twitter.com/redfoxstudios",
    github: "https://github.com/redfoxstudios",
    youtube: "https://youtube.com/redfoxstudios", // Add your YouTube link
    reddit: "https://reddit.com/r/redfoxstudios", // Add your Reddit link
    kofi: "https://ko-fi.com/redfoxstudios", // Add your Ko-Fi link
    paypal: "https://paypal.me/redfoxstudios", // Add your PayPal link
    // LinkedIn removed as per previous implicit request, can be added back if needed
    // linkedin: "https://linkedin.com/company/redfoxstudios",
  },
} as const

export type MaintenanceConfig = typeof maintenanceConfig
