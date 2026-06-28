"use client"

import { Calendar } from "@/components/ui/calendar"

type BookCalendarProps = {
  className?: string
  selected?: Date | null
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
}

export default function BookCalendar( { className, selected, onSelect } : BookCalendarProps) {
  return <Calendar disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} mode="single" className={`rounded-lg border [padding:16px] ${className}`} selected={selected ?? undefined} onSelect={onSelect} />
}