"use client"

import * as React from "react"
import { siteConfig } from "@/config/site"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(siteConfig.maintenanceEnd) - +new Date()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-4 text-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <div className="text-3xl font-bold">--</div>
            <div className="text-sm text-muted-foreground">Loading</div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: siteConfig.countdown.labels.days },
    { value: timeLeft.hours, label: siteConfig.countdown.labels.hours },
    { value: timeLeft.minutes, label: siteConfig.countdown.labels.minutes },
    { value: timeLeft.seconds, label: siteConfig.countdown.labels.seconds }
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
      {timeUnits.map((unit, index) => (
        <div key={index} className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="text-3xl font-bold tabular-nums">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-muted-foreground">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}