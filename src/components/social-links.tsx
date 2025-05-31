"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { maintenanceConfig } from "./maintenance-config"

export function SocialLinks() {
  const { social, company } = maintenanceConfig

  const socialLinks = [
    {
      name: "Twitter",
      url: social.twitter,
      icon: Twitter,
      show: !!social.twitter,
      color: "hover:bg-blue-500 hover:text-white",
    },
    {
      name: "LinkedIn",
      url: social.linkedin,
      icon: Linkedin,
      show: !!social.linkedin,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "GitHub",
      url: social.github,
      icon: Github,
      show: !!social.github,
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "Website",
      url: company.website,
      icon: ExternalLink,
      show: !!company.website,
      color: "hover:bg-purple-600 hover:text-white",
    },
  ].filter((link) => link.show)

  if (socialLinks.length === 0) {
    return <div className="text-sm text-slate-500 dark:text-slate-400">Stay tuned for updates!</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <Button
              key={link.name}
              variant="outline"
              size="sm"
              className={`transition-all duration-300 border-2 ${link.color} hover:scale-110 hover:shadow-lg`}
              asChild
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.name}`}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
