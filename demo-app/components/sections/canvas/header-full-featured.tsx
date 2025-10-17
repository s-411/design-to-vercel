'use client'

import * as React from 'react'
import { ChevronDown, Facebook, Instagram } from 'lucide-react'

export interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  onClick?: () => void
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'tiktok'
  href?: string
  onClick?: () => void
}

export interface HeaderFullFeaturedProps {
  /** Logo text or element */
  logo?: string | React.ReactNode
  /** Social media links */
  socialLinks?: SocialLink[]
  /** Navigation items */
  navItems?: NavItem[]
  /** Button text */
  buttonText?: string
  /** Button click handler */
  onButtonClick?: () => void
}

/**
 * HeaderFullFeatured Component
 *
 * Full-featured header with logo, social icons, navigation, and button.
 * Matches header-9 layout styled with MM Design System.
 *
 * Features:
 * - Logo top-left
 * - Social icons + navigation top-right
 * - Navigation bottom-left
 * - Button bottom-right
 * - Fully responsive
 * - Light/dark mode support
 * - MM Design System styling
 */
export function HeaderFullFeatured({
  logo = 'canvas',
  socialLinks = [
    { platform: 'facebook', href: '#' },
    { platform: 'instagram', href: '#' },
    { platform: 'tiktok', href: '#' },
  ],
  navItems = [
    { label: 'ABOUT', href: '#' },
    { label: 'SERVICES', href: '#', hasDropdown: true },
    { label: 'PRICING', href: '#' },
    { label: 'PORTFOLIO', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'CONTACT', href: '#' },
  ],
  buttonText = 'CLICK HERE',
  onButtonClick,
}: HeaderFullFeaturedProps) {

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-4 h-4" />
      case 'instagram':
        return <Instagram className="w-4 h-4" />
      case 'tiktok':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <header className="py-4 px-4 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          {/* Top Row: Logo + Social Icons */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {typeof logo === 'string' ? (
                <div className="px-4 py-2 border-2 border-muted/30 rounded text-muted-foreground/30 text-2xl font-light">
                  {logo}
                </div>
              ) : (
                logo
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  onClick={social.onClick}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row: Navigation + Button */}
          <div className="flex items-center justify-between">
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  )}
                </a>
              ))}
            </nav>

            {/* Button */}
            <button
              className="btn-mm text-sm px-6 py-2"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
