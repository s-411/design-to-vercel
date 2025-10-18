'use client'

import * as React from 'react'
import { Facebook, Instagram } from 'lucide-react'

export interface FooterLogoSocialCopyrightProps {
  logo?: string
  copyrightText?: string
  onSocialClick?: (platform: string) => void
}

export function FooterLogoSocialCopyright({
  logo = 'canvas',
  copyrightText = '© 2022 All-in-One Layout Kit for the Divi Theme - All rights reserved',
  onSocialClick,
}: FooterLogoSocialCopyrightProps) {
  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform)
    }
  }

  return (
    <footer className="w-full py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="border-2 border-foreground px-3 py-1 inline-block">
              <span className="font-heading text-2xl text-foreground">{logo}</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:flex-1">
            <p className="text-sm text-muted-foreground">{copyrightText}</p>
          </div>

          {/* Social Icons */}
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
    </footer>
  )
}
