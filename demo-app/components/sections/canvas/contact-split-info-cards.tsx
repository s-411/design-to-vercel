'use client'

import * as React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export interface ContactSplitInfoCardsProps {
  emailHeading?: string
  emailDescription?: string
  email?: string
  phoneHeading?: string
  phoneDescription?: string
  phone?: string
  addressHeading?: string
  addressDescription?: string
  address?: string
  formHeading?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  messagePlaceholder?: string
  buttonText?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export function ContactSplitInfoCards({
  emailHeading = 'hello@mywebsite.com',
  emailDescription = 'We strive to answer all e-mail requests within 24 hours excluding weekends and holidays.',
  email = 'hello@mywebsite.com',
  phoneHeading = '234-194-1387',
  phoneDescription = 'Our working hours are from Monday – Friday 8:00am – 5:00pm UTC',
  phone = '234-194-1387',
  addressHeading = '3118 Crescent St, New York',
  addressDescription = "We're in located Astoria! Come and join us for a coffee at the office.",
  address = '3118 Crescent St, New York',
  formHeading = 'Send a message',
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email Address',
  messagePlaceholder = 'Message',
  buttonText = 'SEND',
  onSubmit,
}: ContactSplitInfoCardsProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.currentTarget)
      onSubmit({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      })
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Info cards */}
          <div className="space-y-8">
            {/* Email card */}
            <div className="flex gap-6">
              <div className="w-20 h-20 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading text-foreground mb-2">
                  {emailHeading}
                </h3>
                <p className="text-muted-foreground">
                  {emailDescription}
                </p>
              </div>
            </div>

            {/* Phone card */}
            <div className="flex gap-6">
              <div className="w-20 h-20 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading text-foreground mb-2">
                  {phoneHeading}
                </h3>
                <p className="text-muted-foreground">
                  {phoneDescription}
                </p>
              </div>
            </div>

            {/* Location card */}
            <div className="flex gap-6">
              <div className="w-20 h-20 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading text-foreground mb-2">
                  {addressHeading}
                </h3>
                <p className="text-muted-foreground">
                  {addressDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-8">
              {formHeading}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder={namePlaceholder}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder={messagePlaceholder}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-mm px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
