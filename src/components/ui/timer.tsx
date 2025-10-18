import React, { useEffect, useState } from 'react'

// Define the sale end date - eg: new Date('2024-12-31T23:59:59');
const saleEndDate = new Date(Date.now() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000 + 24 * 1000) // Setting 9h 45m 24s from now for demo purposes

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}
/**
 * A timer component that displays the time left until a specified sale end date.
 *
 * The component displays the time in days, hours, minutes and seconds, and updates every second.
 *
 * If the sale end date has passed, the timer will display "Expired".
 *
 * @example
 * <Timer />
 */
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = saleEndDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    // Calculate immediately and then every second
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeLeft.isExpired) {
    return <span className="text-muted-foreground">Expired</span>
  }

  return (
    <div className="divide-primary-foreground bg-primary/15 flex items-center divide-x rounded-md text-sm tabular-nums">
      {timeLeft.days > 0 && (
        <span className="flex h-8 items-center justify-center p-2">
          {timeLeft.days}
          <span className="text-muted-foreground">d</span>
        </span>
      )}
      <span className="flex h-8 items-center justify-center p-2">
        {timeLeft.hours.toString().padStart(2, '0')}
        <span className="text-muted-foreground">h</span>
      </span>
      <span className="flex h-8 items-center justify-center p-2">
        {timeLeft.minutes.toString().padStart(2, '0')}
        <span className="text-muted-foreground">m</span>
      </span>
      <span className="flex h-8 items-center justify-center p-2">
        {timeLeft.seconds.toString().padStart(2, '0')}
        <span className="text-muted-foreground">s</span>
      </span>
    </div>
  )
}

export default Timer
