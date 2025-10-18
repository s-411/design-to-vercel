'use client'

import * as React from 'react'

export interface SignupHorizontalWithImageProps {
  eyebrow?: string
  heading?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  buttonText?: string
  privacyText?: string
  privacyLinkText?: string
  privacyLinkHref?: string
}

export function SignupHorizontalWithImage({
  eyebrow = 'Irresistable Offer',
  heading = 'A heading with a call to action',
  namePlaceholder = 'Name',
  emailPlaceholder = 'Email',
  buttonText = 'SIGN UP',
  privacyText = 'GDPR-compliant, so you can subtly include a link to your',
  privacyLinkText = 'Privacy Policy',
  privacyLinkHref = '#',
}: SignupHorizontalWithImageProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Image placeholder */}
          <div className="w-full lg:w-64 aspect-square bg-muted/50 dark:bg-muted/30 rounded-lg" />

          {/* Content */}
          <div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {eyebrow}
              </p>
              <h2 className="text-2xl lg:text-3xl font-heading text-foreground">
                {heading}
              </h2>
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
                  className="btn-mm w-full lg:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
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
      </div>
    </div>
  )
}
