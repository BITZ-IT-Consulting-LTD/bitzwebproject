'use client'

import { Button } from "@/components/ui/button"

interface DirectionButtonsProps {
  address: string
}

export function DirectionButtons({ address }: DirectionButtonsProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`

  return (
    <div className="flex gap-4 mt-2">
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-full px-6"
        onClick={() => window.open(googleMapsUrl, '_blank')}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
        </svg>
        Google Maps
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-full px-6"
        onClick={() => window.open(wazeUrl, '_blank')}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 4C14.209 4 16 5.791 16 8C16 10.209 14.209 12 12 12C9.791 12 8 10.209 8 8C8 5.791 9.791 4 12 4ZM12 20C9.163 20 6.588 18.551 5 16.196C5.033 14.188 10 13 12 13C13.997 13 18.967 14.188 19 16.196C17.412 18.551 14.837 20 12 20Z"/>
        </svg>
        Waze
      </Button>
    </div>
  )
} 