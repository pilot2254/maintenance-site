"use client"

import { useEffect, useState } from "react"
import { getRelativeTime } from "@/utils/time-utils"

interface RelativeTimeProps {
  date: Date
  className?: string
}

export function RelativeTime({ date, className }: RelativeTimeProps) {
  const [timeAgo, setTimeAgo] = useState(getRelativeTime(date))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeAgo(getRelativeTime(date))
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [date])

  return <span className={className}>{timeAgo}</span>
}