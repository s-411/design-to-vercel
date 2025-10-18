'use client'

import * as React from 'react'

export interface FooterCopyrightLogoLinksProps {
  copyrightText?: string
  logo?: string
  privacyLink?: string
  termsLink?: string
  onLinkClick?: (link: string) => void
}

export function FooterCopyrightLogoLinks({
  copyrightText = '© 2022 Canvas - All-in-One Layout Kit for Divi',
  logo = 'canvas',
  privacyLink = 'Privacy Policy',
  termsLink = 'Terms & Conditions',
  onLinkClick,
}: FooterCopyrightLogoLinksProps) {
  const handleLinkClick = (link: string) => {
    if (onLinkClick) {
      onLinkClick(link)
    }
  }

  return (
    <footer className="w-full py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <p className="text-sm text-muted-foreground">{copyrightText}</p>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="border-2 border-foreground px-3 py-1 inline-block">
              <span className="font-heading text-2xl text-foreground">{logo}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 order-3">
            <button
              onClick={() => handleLinkClick('privacy')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {privacyLink}
            </button>
            <button
              onClick={() => handleLinkClick('terms')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {termsLink}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
