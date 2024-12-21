export function getTimeRemaining(targetDate: Date) {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()
  
    // Return early if the target date has passed
    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        isComplete: true
      }
    }
  
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  
    return {
      days,
      hours,
      minutes,
      isComplete: false
    }
  }
  
  export function getRelativeTime(date: Date): string {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
    if (diffInSeconds < 60) return 'just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
    
    return date.toLocaleDateString()
  }  