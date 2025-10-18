'use client'

import * as React from 'react'
import { Facebook, Instagram } from 'lucide-react'

export interface FooterLinkColumn {
  heading: string
  links: string[]
}

export interface FooterLinksLogoSocialProps {
  leftColumn?: FooterLinkColumn
  middleColumn?: FooterLinkColumn
  logo?: string
  copyrightText?: string
  tagline?: string
  onSocialClick?: (platform: string) => void
}

export function FooterLinksLogoSocial({
  leftColumn = {
    heading: 'Category',
    links: ['First footer link', 'Second link', 'Third footer link', 'Fourth sample link', 'Fifth link'],
  },
  middleColumn = {
    heading: 'Category',
    links: ['First footer link', 'Second link', 'Third footer link', 'Fourth sample link', 'Fifth link'],
  },
  logo = 'canvas',
  copyrightText = '© 2022 - All rights reserved',
  tagline = 'All-in-One Layout Kit for the Divi Theme',
  onSocialClick,
}: FooterLinksLogoSocialProps) {
  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform)
    }
  }

  return (
    <footer className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{leftColumn.heading}</h3>
            <ul className="space-y-3">
              {leftColumn.links.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle: Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{middleColumn.heading}</h3>
            <ul className="space-y-3">
              {middleColumn.links.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Logo, Social, Copyright */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="border-2 border-foreground px-3 py-1 inline-block">
              <span className="font-heading text-2xl text-foreground">{logo}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleSocialClick('facebook')}
                className="w-12 h-12 bg-primary rounded flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick('instagram')}
                className="w-12 h-12 bg-primary rounded flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick('tiktok')}
                className="w-12 h-12 bg-primary rounded flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </button>
            </div>

            {/* Copyright */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{copyrightText}</p>
              <p className="text-sm text-muted-foreground">{tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
