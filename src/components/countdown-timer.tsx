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

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft()) // Initial calculation
    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    // Placeholder for SSR or initial load to prevent layout shift
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-sm mx-auto">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-center border border-zinc-200 dark:border-zinc-800"
          >
            <div className="text-2xl md:text-3xl font-mono font-medium text-zinc-700 dark:text-zinc-300">--</div>
            <div className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">
              Wait
            </div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-sm mx-auto">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-center border border-zinc-200 dark:border-zinc-800"
        >
          <div className="text-2xl md:text-3xl font-mono font-medium text-zinc-700 dark:text-zinc-300">
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  )
}
