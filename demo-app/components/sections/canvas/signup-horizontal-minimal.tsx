'use client'

import * as React from 'react'

export interface SignupHorizontalMinimalProps {
  heading?: string
  eyebrow?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  buttonText?: string
  privacyText?: string
  privacyLinkText?: string
  privacyLinkHref?: string
}

export function SignupHorizontalMinimal({
  heading = 'Sign up now!',
  eyebrow = 'Irresistable Offer Details',
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email',
  buttonText = 'SIGN UP',
  privacyText = 'GDPR-compliant, so you can subtly include a link to your',
  privacyLinkText = 'Privacy Policy',
  privacyLinkHref = '#',
}: SignupHorizontalMinimalProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-2">
            {heading}
          </h2>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {eyebrow}
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-4 items-end">
            <input
              type="text"
              placeholder={namePlaceholder}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full lg:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              {buttonText}
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            {privacyText}{' '}
            <a href={privacyLinkHref} className="text-foreground underline hover:text-primary">
              {privacyLinkText}
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
