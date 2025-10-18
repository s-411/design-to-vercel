'use client'

import * as React from 'react'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

export interface ContactSplitSocialFormProps {
  leftHeading?: string
  contactHeading?: string
  address?: string
  phone?: string
  email?: string
  rightHeading?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  messagePlaceholder?: string
  buttonText?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export function ContactSplitSocialForm({
  leftHeading = "Let's Connect",
  contactHeading = 'Contact Details',
  address = '3118 Crescent St, Astoria, New York 11106',
  phone = '234-194-1387',
  email = 'hello@mywebsite.com',
  rightHeading = 'Get in touch',
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email Address',
  messagePlaceholder = 'Message',
  buttonText = 'SEND MESSAGE',
  onSubmit,
}: ContactSplitSocialFormProps) {
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
          {/* Left side - Social and contact info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-8">
              {leftHeading}
            </h2>

            {/* Social icons */}
            <div className="flex gap-4 mb-12">
              <div className="w-14 h-14 bg-primary rounded flex items-center justify-center text-primary-foreground">
                <Facebook className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-primary rounded flex items-center justify-center text-primary-foreground">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-primary rounded flex items-center justify-center text-primary-foreground">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
            </div>

            {/* Contact details */}
            <h3 className="text-2xl font-heading text-foreground mb-6">
              {contactHeading}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">{phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">{email}</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-8">
              {rightHeading}
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
