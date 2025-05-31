"use client"

import * as React from "react"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +targetDate - +new Date()
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft()) // Initial calculation
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" }, // Changed Mins to Minutes
    { value: timeLeft.seconds, label: "Seconds" }, // Changed Secs to Seconds
  ]

  if (!mounted) {
    // Placeholder for SSR or initial load to prevent layout shift
    // Matching the refined style of the actual timer
    return (
      <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-md mx-auto">
        {timeUnits.map((unit, i) => (
          <div
            key={i}
            className="bg-secondary rounded-lg p-3 md:p-4 text-center border border-border/50" // Softer border for placeholder
          >
            <div className="text-3xl md:text-4xl font-mono font-medium text-foreground tabular-nums">--</div>
            <div className="text-xs text-muted-foreground/70 uppercase tracking-wider mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-md mx-auto">
      {" "}
      {/* Increased max-width slightly */}
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          // Refined card styling: slightly softer border, consistent padding
          className="bg-secondary rounded-lg p-3 md:p-4 text-center border border-border/70"
        >
          <div className="text-3xl md:text-4xl font-mono font-medium text-foreground tabular-nums">
            {/* `tabular-nums` ensures numbers take up the same space, preventing jitter */}
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-muted-foreground/80 uppercase tracking-wider mt-1">
            {/* Made label text slightly more muted */}
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  )
}
