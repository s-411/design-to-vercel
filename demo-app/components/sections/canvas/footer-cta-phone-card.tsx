'use client'

import * as React from 'react'
import { Facebook, Instagram } from 'lucide-react'

export interface FooterCtaPhoneCardProps {
  tagline?: string
  heading?: string
  description?: string
  callLabel?: string
  phone?: string
  copyrightText?: string
  onSocialClick?: (platform: string) => void
}

export function FooterCtaPhoneCard({
  tagline = 'Short Tagline',
  heading = 'A heading with a call to action',
  description = 'Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style this in the module Design settings.',
  callLabel = 'Call Us Now',
  phone = '234-194-1387',
  copyrightText = '© 2022 All-in-One Layout Kit for the Divi Theme - All rights reserved',
  onSocialClick,
}: FooterCtaPhoneCardProps) {
  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform)
    }
  }

  return (
    <footer className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {/* Top Section: CTA and Phone Card */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: CTA Content */}
            <div className="space-y-6">
              <p className="text-primary font-semibold">{tagline}</p>
              <h2 className="text-4xl lg:text-5xl font-heading text-foreground">{heading}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>

            {/* Right: Phone Card */}
            <div className="bg-muted/20 rounded-lg p-8 lg:p-10 text-center space-y-4">
              <p className="text-primary font-semibold text-lg">{callLabel}</p>
              <p className="text-4xl lg:text-5xl font-heading text-foreground">{phone}</p>
            </div>
          </div>

          {/* Bottom Section: Copyright and Social */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-sm text-muted-foreground">{copyrightText}</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="text-muted-foreground/40 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="text-muted-foreground/40 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSocialClick('tiktok')}
                  className="text-muted-foreground/40 hover:text-primary transition-colors"
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
