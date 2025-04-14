"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  endDate: Date
}

interface TimeUnit {
  value: number
  label: string
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - Date.now()

      if (difference <= 0) {
        return [
          { value: 0, label: "days" },
          { value: 0, label: "hours" },
          { value: 0, label: "min" },
          { value: 0, label: "sec" },
        ]
      }

      return [
        { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: "days" },
        { value: Math.floor((difference / (1000 * 60 * 60)) % 24), label: "hours" },
        { value: Math.floor((difference / 1000 / 60) % 60), label: "min" },
        { value: Math.floor((difference / 1000) % 60), label: "sec" },
      ]
    }

    setTimeUnits(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeUnits(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-xl font-mono font-bold text-primary">
            {unit.value.toString().padStart(2, "0")}
          </div>
          <span className="mt-1 text-xs text-muted-foreground">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}