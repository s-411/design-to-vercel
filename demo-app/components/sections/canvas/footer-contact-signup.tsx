'use client'

import * as React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

export interface FooterContactSignupProps {
  contactHeading?: string
  address?: string
  phone?: string
  email?: string
  signupHeading?: string
  signupDescription?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  buttonText?: string
  gdprText?: string
  copyrightText?: string
  onSubmit?: (data: { name: string; email: string }) => void
  onSocialClick?: (platform: string) => void
}

export function FooterContactSignup({
  contactHeading = "Let's Connect",
  address = '3118 Crescent St, Astoria, New York 11106',
  phone = '234-194-1387',
  email = 'hello@mywebsite.com',
  signupHeading = "Don't forget to subscribe",
  signupDescription = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.',
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email',
  buttonText = 'SUBSCRIBE NOW',
  gdprText = 'GDPR-compliant, so you can subtly include a link to your Privacy Policy',
  copyrightText = '© 2022 All-in-One Layout Kit for the Divi Theme - All rights reserved',
  onSubmit,
  onSocialClick,
}: FooterContactSignupProps) {
  const [name, setName] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit({ name, email: emailValue })
    }
  }

  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform)
    }
  }

  return (
    <footer className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {/* Top Section: Contact and Signup */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading text-foreground">{contactHeading}</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground mt-2">{address}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">{phone}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">{email}</p>
                </div>
              </div>
            </div>

            {/* Right: Signup Form */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading text-foreground">{signupHeading}</h2>
              <p className="text-muted-foreground">{signupDescription}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={namePlaceholder}
                    className="px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder={emailPlaceholder}
                    className="px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-mm w-full py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {buttonText}
                </button>
              </form>

              <p className="text-xs text-muted-foreground">
                {gdprText.split('Privacy Policy').map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <button className="underline hover:text-primary transition-colors">Privacy Policy</button>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          {/* Bottom Section: Copyright and Social */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-sm text-muted-foreground">{copyrightText}</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSocialClick('tiktok')}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
