'use client'

import * as React from 'react'

export interface SignupSplitImageLeftProps {
  eyebrow?: string
  heading?: string
  description?: string
  firstNamePlaceholder?: string
  lastNamePlaceholder?: string
  emailPlaceholder?: string
  buttonText?: string
  privacyText?: string
  privacyLinkText?: string
  privacyLinkHref?: string
}

export function SignupSplitImageLeft({
  eyebrow = 'Irresistable Offer',
  heading = 'A heading with a call to action',
  description = "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content.",
  firstNamePlaceholder = 'First Name',
  lastNamePlaceholder = 'Last Name',
  emailPlaceholder = 'Email',
  buttonText = 'SUBSCRIBE NOW',
  privacyText = 'GDPR-compliant, so you can subtly include a link to your',
  privacyLinkText = 'Privacy Policy',
  privacyLinkHref = '#',
}: SignupSplitImageLeftProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-muted/50 dark:bg-muted/30 rounded-lg" />

          {/* Form content */}
          <div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {eyebrow}
              </p>
              <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-4">
                {heading}
              </h2>
              <p className="text-base text-muted-foreground">
                {description}
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={firstNamePlaceholder}
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder={lastNamePlaceholder}
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                placeholder={emailPlaceholder}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
              >
                {buttonText}
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              {privacyText}{' '}
              <a href={privacyLinkHref} className="text-foreground underline hover:text-primary">
                {privacyLinkText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
