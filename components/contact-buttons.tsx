'use client'

import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react'

interface ContactButtonsProps {
  email: string
  phone: string
}

export function ContactButtons({ email, phone }: ContactButtonsProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="flex gap-4 mt-2">
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-full px-6"
        onClick={handleEmailClick}
      >
        <Mail className="h-5 w-5" />
        Email Us
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-full px-6"
        onClick={handlePhoneClick}
      >
        <Phone className="h-5 w-5" />
        Call Us
      </Button>
    </div>
  )
} 