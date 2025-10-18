'use client'

import * as React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export interface ContactInfoGridSignupProps {
  address1?: string
  address2?: string
  email1?: string
  email2?: string
  phone1?: string
  phone2?: string
  heading?: string
  description?: string
  emailPlaceholder?: string
  buttonText?: string
  privacyText?: string
  privacyLinkText?: string
  privacyLinkHref?: string
  onSubmit?: (email: string) => void
}

export function ContactInfoGridSignup({
  address1 = '3118 Crescent St',
  address2 = 'Astoria, New York 11106',
  email1 = 'hello@mywebsite.com',
  email2 = 'support@mywebsite.com',
  phone1 = '234-194-1387',
  phone2 = '234-194-1256',
  heading = 'Sample heading with a call to action',
  description = "Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.",
  emailPlaceholder = 'Email',
  buttonText = 'SIGN UP',
  privacyText = 'GDPR-compliant, so you can subtly include a link to your',
  privacyLinkText = 'Privacy Policy',
  privacyLinkHref = '#',
  onSubmit,
}: ContactInfoGridSignupProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.currentTarget)
      onSubmit(formData.get('email') as string)
    }
  }

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section - Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <p className="text-muted-foreground">{address1}</p>
            <p className="text-muted-foreground">{address2}</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <p className="text-muted-foreground">{email1}</p>
            <p className="text-muted-foreground">{email2}</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/30 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <p className="text-muted-foreground">{phone1}</p>
            <p className="text-muted-foreground">{phone2}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-16" />

        {/* Bottom section - CTA with signup form */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-8">
            {description}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="w-full sm:w-96 px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="btn-mm w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              {buttonText}
            </button>
          </form>

          <p className="text-sm text-muted-foreground">
            {privacyText}{' '}
            <a href={privacyLinkHref} className="text-foreground underline hover:text-primary">
              {privacyLinkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
