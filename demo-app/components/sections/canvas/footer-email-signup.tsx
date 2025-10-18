'use client'

import * as React from 'react'

export interface FooterEmailSignupProps {
  contactLabel?: string
  email?: string
  logo?: string
  emailPlaceholder?: string
  buttonText?: string
  gdprText?: string
  copyrightText?: string
  onSubmit?: (email: string) => void
}

export function FooterEmailSignup({
  contactLabel = 'Get in touch:',
  email = 'hello@mywebsite.com',
  logo = 'canvas',
  emailPlaceholder = 'Email',
  buttonText = 'SIGN UP',
  gdprText = 'GDPR-compliant, so you can subtly include a link to your Privacy Policy',
  copyrightText = '© 2022 All-in-One Layout Kit for the Divi Theme - All rights reserved',
  onSubmit,
}: FooterEmailSignupProps) {
  const [emailValue, setEmailValue] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(emailValue)
    }
  }

  return (
    <footer className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact and Logo */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-primary font-semibold">{contactLabel}</p>
              <p className="text-3xl lg:text-4xl font-heading text-foreground">{email}</p>
            </div>

            {/* Logo */}
            <div className="border-2 border-foreground px-3 py-1 inline-block">
              <span className="font-heading text-2xl text-foreground">{logo}</span>
            </div>
          </div>

          {/* Right: Signup Form and Copyright */}
          <div className="space-y-8">
            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder={emailPlaceholder}
                  className="flex-1 px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="btn-mm px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {buttonText}
                </button>
              </div>

              <p className="text-xs text-muted-foreground">
                {gdprText.split('Privacy Policy').map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <button type="button" className="underline hover:text-primary transition-colors">
                        Privacy Policy
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </form>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
