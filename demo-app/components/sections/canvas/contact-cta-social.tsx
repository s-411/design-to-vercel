'use client'

import * as React from 'react'
import { Facebook, Instagram } from 'lucide-react'

export interface ContactCtaSocialProps {
  tagline?: string
  heading?: string
  description?: string
  buttonText?: string
  linkText?: string
  socialHeading?: string
  onButtonClick?: () => void
  onLinkClick?: () => void
}

export function ContactCtaSocial({
  tagline = 'Short Tagline',
  heading = 'A heading with a call to action',
  description = "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings.",
  buttonText = 'SCHEDULE A CALL',
  linkText = 'Learn more',
  socialHeading = 'Follow us:',
  onButtonClick,
  onLinkClick,
}: ContactCtaSocialProps) {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - CTA content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {tagline}
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-6">
              {heading}
            </h2>
            <p className="text-muted-foreground mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={onButtonClick}
                className="btn-mm px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                {buttonText}
              </button>
              <button
                onClick={onLinkClick}
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                {linkText}
              </button>
            </div>
          </div>

          {/* Right side - Social icons */}
          <div className="flex flex-col items-start lg:items-end">
            <h3 className="text-xl font-heading text-foreground mb-6">
              {socialHeading}
            </h3>
            <div className="flex gap-6">
              <Facebook className="w-8 h-8 text-foreground hover:text-primary transition-colors cursor-pointer" />
              <Instagram className="w-8 h-8 text-foreground hover:text-primary transition-colors cursor-pointer" />
              <svg
                className="w-8 h-8 text-foreground hover:text-primary transition-colors cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <svg
                className="w-8 h-8 text-foreground hover:text-primary transition-colors cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
