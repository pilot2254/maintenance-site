"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from 'lucide-react'
import { getTimeRemaining } from "@/utils/time-utils"

export function TimeRemaining() {
  const [timeRemaining, setTimeRemaining] = useState(() => 
    getTimeRemaining(new Date('2025-06-01T00:00:00'))
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(new Date('2025-06-01T00:00:00')))
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  if (timeRemaining.isComplete) {
    return (
      <div className="rounded-lg border bg-card p-4 text-card-foreground">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-4 w-4 text-green-500" />
          <p className="text-sm">
            Maintenance should be complete. Please refresh the page.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground">
      <div className="flex items-center space-x-2">
        <AlertCircle className="h-4 w-4 text-muted-foreground" />
        <p className="text-sm">
          Estimated completion in:{" "}
          <span className="font-medium">
            {timeRemaining.days > 0 && `${timeRemaining.days} days, `}
            {timeRemaining.hours} hours, and {timeRemaining.minutes} minutes
          </span>
        </p>
      </div>
    </div>
  )
}